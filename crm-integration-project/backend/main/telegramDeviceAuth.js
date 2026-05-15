'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const { NewMessage } = require('telegram/events');
const { getPeerId } = require('telegram/Utils');
const { ConnectionTCPObfuscated } = require('telegram/network');
const db = require('./database');

let logger = console;
let messageHandler = null;

/** @type {Map<string, object>} */
const pendingSessions = new Map();
const mtprotoPendingSessionBySubdomain = new Map();
const mtprotoHistorySyncMarks = new Map();
const mtprotoHistoryQueues = new Map();
const mtprotoHistoryWorkers = new Set();
const mtprotoEnsureInflight = new Map();
const mediaRoot = path.join(__dirname, 'media', 'mtproto');

function setLogger(l) {
  logger = l || console;
}

function setMessageHandler(fn) {
  messageHandler = fn;
}

function createQrDeepLink(token) {
  const buf = Buffer.isBuffer(token) ? token : Buffer.from(token);
  return `tg://login?token=${buf.toString('base64url')}`;
}

function isQrExpired(expiresAt) {
  if (!expiresAt) return true;
  const dt = new Date(expiresAt);
  if (Number.isNaN(dt.getTime())) return true;
  return dt.getTime() <= Date.now() + 5000;
}

function withTimeout(promise, ms, message) {
  let timer = null;
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

function getDcPool() {
  return [
    { dcId: 2, ip: '149.154.175.50', port: 443 },
    { dcId: 2, ip: '149.154.175.50', port: 80 },
    { dcId: 2, ip: '149.154.175.50', port: 5222 },
    { dcId: 2, ip: '149.154.167.50', port: 443 },
    { dcId: 2, ip: '149.154.167.50', port: 80 },
    { dcId: 4, ip: '149.154.167.91', port: 443 },
    { dcId: 4, ip: '149.154.167.91', port: 80 },
    { dcId: 3, ip: '149.154.175.100', port: 443 },
    { dcId: 3, ip: '149.154.175.100', port: 80 }
  ];
}

function pickDcEndpoint(attempt) {
  const pool = getDcPool();
  return pool[Math.max(0, ((attempt || 1) - 1) % pool.length)];
}

function isInvalidSessionError(message) {
  const msg = String(message || '').toLowerCase();
  return msg.includes('auth_key_unregistered') || msg.includes('broken authorization key');
}

async function purgeInvalidSession(subdomain, client = null) {
  const normalized = String(subdomain || '').trim().toLowerCase();
  if (!normalized) return;
  try {
    if (client) await client.disconnect();
  } catch (_) {}
  try {
    const g = global.mtprotoBySubdomain?.get(normalized);
    if (g?.client) {
      if (g?.handler) g.client.removeEventHandler(g.handler);
      await g.client.disconnect().catch(() => {});
    }
  } catch (_) {}
  global.mtprotoBySubdomain?.delete(normalized);
  await new Promise((resolve) => {
    db.run(
      `DELETE FROM telegram_mtproto_sessions WHERE amo_subdomain = ?`,
      [normalized],
      () => resolve()
    );
  });
}

async function disconnectExistingMtproto(subdomain) {
  const g = global.mtprotoBySubdomain?.get(subdomain);
  if (!g?.client) return;
  try {
    if (g.handler) {
      g.client.removeEventHandler(g.handler);
    }
    await g.client.disconnect();
  } catch (e) {
    logger.warn('[tg-device] disconnect prev', e.message || e);
  }
  global.mtprotoBySubdomain.delete(subdomain);
}

function toDisplayTitle(dialog) {
  if (!dialog) return null;
  if (dialog.title) return String(dialog.title);
  if (dialog.name) return String(dialog.name);
  if (dialog.entity?.title) return String(dialog.entity.title);
  const fn = dialog.entity?.firstName || dialog.entity?.first_name || null;
  const ln = dialog.entity?.lastName || dialog.entity?.last_name || null;
  const full = [fn, ln].filter(Boolean).join(' ').trim();
  if (full) return full;
  if (dialog.entity?.username) return `@${dialog.entity.username}`;
  return null;
}

function normalizeText(input) {
  return String(input || '').trim();
}

function toSqlDate(value) {
  if (!value) return null;
  const dt = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(dt.getTime())) return null;
  return dt.toISOString().slice(0, 19).replace('T', ' ');
}

function detectMtprotoMedia(message) {
  const doc = message?.media?.document;
  if (!doc) return null;
  const attrs = Array.isArray(doc.attributes) ? doc.attributes : [];
  let mediaType = null;
  let duration = null;
  for (const a of attrs) {
    const className = String(a?.className || '');
    if (className === 'DocumentAttributeAudio' && a?.voice) {
      mediaType = 'voice';
      duration = Number.isFinite(Number(a?.duration)) ? Number(a.duration) : null;
      break;
    }
    if (className === 'DocumentAttributeVideo' && a?.roundMessage) {
      mediaType = 'video_note';
      duration = Number.isFinite(Number(a?.duration)) ? Number(a.duration) : null;
      break;
    }
  }
  if (!mediaType) return null;
  return {
    mediaType,
    mimeType: doc?.mimeType || null,
    duration
  };
}

function toMessageStatus(message) {
  if (!message) return 'sent';
  if (message.out) {
    return message.unread ? 'sent' : 'read';
  }
  return 'sent';
}

function toMediaExt(mediaType, mimeType) {
  if (mediaType === 'voice') return 'ogg';
  if (mediaType === 'video_note') return 'mp4';
  if (String(mimeType || '').includes('ogg')) return 'ogg';
  if (String(mimeType || '').includes('mp4')) return 'mp4';
  return 'bin';
}

async function saveMtprotoMedia(client, message, subdomain, chatId, externalId, mediaMeta) {
  if (!client || !message || !mediaMeta?.mediaType || !externalId) return null;
  try {
    const buffer = await withTimeout(
      client.downloadMedia(message, { workers: 1 }),
      20000,
      'MTProto media download timeout'
    );
    if (!buffer || !buffer.length) return null;
    const ext = toMediaExt(mediaMeta.mediaType, mediaMeta.mimeType);
    const safeSubdomain = String(subdomain || 'default').replace(/[^a-zA-Z0-9_-]/g, '_');
    const safeChat = String(chatId || 'chat').replace(/[^a-zA-Z0-9_-]/g, '_');
    const dir = path.join(mediaRoot, safeSubdomain, safeChat);
    fs.mkdirSync(dir, { recursive: true });
    const fileName = `${externalId}.${ext}`;
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, Buffer.from(buffer));
    const rel = path.posix.join('mtproto', safeSubdomain, safeChat, fileName);
    return `/media/${rel}`;
  } catch (e) {
    logger.warn('[tg-device] media save failed', {
      subdomain,
      chatId,
      externalId,
      error: e?.message || e
    });
    return null;
  }
}

async function upsertMtprotoDialog(dialog, subdomain) {
  const chatId = dialog?.id != null ? dialog.id.toString() : null;
  if (!chatId) return null;

  const title = toDisplayTitle(dialog) || `Диалог ${chatId}`;
  const lastText = normalizeText(dialog?.message?.message);
  const lastDirection = dialog?.message?.out ? 'outgoing' : (lastText ? 'incoming' : null);
  const lastAt = toSqlDate(dialog?.message?.date || dialog?.date || null);
  const unread = Number(dialog?.unreadCount || 0);

  const conversationId = await new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO conversations (
         telegram_chat_id,
         telegram_user_id,
         amo_subdomain,
         channel,
         display_title,
         unread_count,
         last_message_text,
         last_message_direction,
         last_message_at
       )
       VALUES (?, ?, ?, 'telegram_mtproto', ?, ?, ?, ?, ?)
       ON CONFLICT(telegram_chat_id) DO UPDATE SET
         amo_subdomain = excluded.amo_subdomain,
         telegram_user_id = excluded.telegram_user_id,
         channel = excluded.channel,
         display_title = COALESCE(excluded.display_title, conversations.display_title),
         unread_count = CASE
           WHEN excluded.unread_count > 0 THEN excluded.unread_count
           ELSE conversations.unread_count
         END,
         last_message_text = COALESCE(excluded.last_message_text, conversations.last_message_text),
         last_message_direction = COALESCE(excluded.last_message_direction, conversations.last_message_direction),
         last_message_at = COALESCE(excluded.last_message_at, conversations.last_message_at)`,
      [chatId, chatId, subdomain, title, unread, lastText || null, lastDirection, lastAt],
      function onRun(err) {
        if (err) return reject(err);
        if (this && this.lastID) return resolve(this.lastID);
        db.get(`SELECT id FROM conversations WHERE telegram_chat_id = ?`, [chatId], (e, row) => {
          if (e) return reject(e);
          resolve(row?.id || null);
        });
      }
    );
  });

  return { conversationId, chatId };
}

async function upsertMtprotoDialogs(client, subdomain) {
  const dialogs = await client.getDialogs({ limit: 200 });
  for (const dialog of dialogs) {
    await upsertMtprotoDialog(dialog, subdomain);
  }
}

async function insertMtprotoHistory(client, subdomain, chatId, conversationId, message) {
  const text = normalizeText(message?.message);
  if (!conversationId) return;
  const externalId = message?.id != null ? String(message.id) : null;
  if (!externalId) return;
  const direction = message?.out ? 'outgoing' : 'incoming';
  const status = toMessageStatus(message);
  const senderName =
    message?.sender?.username
      ? `@${message.sender.username}`
      : [message?.sender?.firstName, message?.sender?.lastName].filter(Boolean).join(' ').trim() || null;
  const createdAt = toSqlDate(message?.date) || toSqlDate(Date.now());
  const mediaMeta = detectMtprotoMedia(message);
  const previewText =
    text ||
    (mediaMeta?.mediaType === 'voice'
      ? '[Голосовое сообщение]'
      : mediaMeta?.mediaType === 'video_note'
        ? '[Видеосообщение]'
        : '');
  if (!previewText && !mediaMeta) return;

  await new Promise((resolve, reject) => {
    db.get(
      `SELECT id FROM messages WHERE conversation_id = ? AND external_message_id = ? LIMIT 1`,
      [conversationId, externalId],
      async (err, row) => {
        if (err) return reject(err);
        if (row) return resolve();
        try {
          let mediaUrl = null;
          if (mediaMeta?.mediaType) {
            mediaUrl = await saveMtprotoMedia(client, message, subdomain, chatId, externalId, mediaMeta);
          }
          db.run(
            `INSERT INTO messages (
               conversation_id, text, direction, status, sender_name, external_message_id, source_platform,
               media_type, media_url, mime_type, media_duration, created_at
             )
             VALUES (?, ?, ?, ?, ?, ?, 'telegram_mtproto', ?, ?, ?, ?, ?)`,
            [
              conversationId,
              previewText,
              direction,
              status,
              senderName,
              externalId,
              mediaMeta?.mediaType || null,
              mediaUrl,
              mediaMeta?.mimeType || null,
              mediaMeta?.duration || null,
              createdAt
            ],
            (e) => (e ? reject(e) : resolve())
          );
        } catch (downloadErr) {
          reject(downloadErr);
        }
      }
    );
  });
}

function shouldSyncHistoryNow(key, force = false, cooldownMs = 20000) {
  if (force) return true;
  const now = Date.now();
  const prev = mtprotoHistorySyncMarks.get(key) || 0;
  if (now - prev < cooldownMs) return false;
  mtprotoHistorySyncMarks.set(key, now);
  return true;
}

async function processQueuedHistorySync(subdomain) {
  if (mtprotoHistoryWorkers.has(subdomain)) return;
  mtprotoHistoryWorkers.add(subdomain);
  try {
    while (true) {
      const queue = mtprotoHistoryQueues.get(subdomain) || [];
      const nextJob = queue.shift();
      if (!nextJob) break;
      mtprotoHistoryQueues.set(subdomain, queue);
      const nextChatId = String(nextJob.chatId || '').trim();
      if (!nextChatId) continue;
      try {
        await syncMtprotoHistoryForChat(subdomain, nextChatId, {
          full: Boolean(nextJob.full),
          force: Boolean(nextJob.force),
          limit: Number.isFinite(Number(nextJob.limit)) ? Number(nextJob.limit) : 200,
          requireActiveClient: true
        });
      } catch (e) {
        logger.warn('[tg-device] queued history sync failed', {
          subdomain,
          telegramChatId: nextChatId,
          error: e?.message || e
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  } finally {
    mtprotoHistoryWorkers.delete(subdomain);
    const tail = mtprotoHistoryQueues.get(subdomain) || [];
    if (tail.length > 0) {
      processQueuedHistorySync(subdomain).catch((e) => {
        logger.warn('[tg-device] queue worker restart failed', {
          subdomain,
          error: e?.message || e
        });
      });
    }
  }
}

function queueMtprotoHistorySyncForChat(subdomain, telegramChatId, options = {}) {
  const normalizedSubdomain = String(subdomain || '').trim().toLowerCase();
  const normalizedChatId = String(telegramChatId || '').trim();
  if (!normalizedSubdomain || !normalizedChatId) return false;
  const force = Boolean(options.force);
  const full = Boolean(options.full);
  const limit = Number.isFinite(Number(options.limit)) ? Math.max(1, Math.min(Number(options.limit), 200)) : 200;
  const key = `${normalizedSubdomain}:${normalizedChatId}`;
  if (!shouldSyncHistoryNow(key, force, 15000)) return false;
  const queue = mtprotoHistoryQueues.get(normalizedSubdomain) || [];
  if (!queue.some((job) => String(job?.chatId || '') === normalizedChatId)) {
    queue.push({ chatId: normalizedChatId, full, force, limit });
  }
  mtprotoHistoryQueues.set(normalizedSubdomain, queue);
  processQueuedHistorySync(normalizedSubdomain).catch((e) => {
    logger.warn('[tg-device] queue worker failed', {
      subdomain: normalizedSubdomain,
      error: e?.message || e
    });
  });
  return true;
}

async function preloadRecentDialogsHistory(client, subdomain, limit = 50) {
  const safeLimit = Math.max(1, Math.min(Number(limit) || 50, 200));
  const dialogs = await withTimeout(
    client.getDialogs({ limit: safeLimit }),
    20000,
    'MTProto preload dialogs timeout'
  );
  for (const dialog of dialogs || []) {
    const chatId = dialog?.id != null ? String(dialog.id) : '';
    await upsertMtprotoDialog(dialog, subdomain);
    if (chatId) {
      queueMtprotoHistorySyncForChat(subdomain, chatId, { force: true, limit: 200, full: false });
    }
  }
  return (dialogs || []).length;
}

async function syncMtprotoHistoryForDialog(client, subdomain, dialog, options = {}) {
  const full = Boolean(options.full);
  const limit = Number.isFinite(options.limit) ? Math.max(1, Math.min(options.limit, 200)) : 25;
  const upserted = await upsertMtprotoDialog(dialog, subdomain);
  if (!upserted?.conversationId) return false;
  const peer = dialog?.entity || dialog?.inputEntity || null;
  if (!peer) return false;

  if (full) {
    let offsetId = 0;
    const batchSize = 100;
    const hardCap = 5000;
    const maxBatches = 50;
    let total = 0;
    let batches = 0;
    let prevTailId = null;
    while (total < hardCap && batches < maxBatches) {
      let batch = [];
      try {
        batch = await withTimeout(
          client.getMessages(peer, { limit: batchSize, offsetId }),
          12000,
          'MTProto history batch timeout'
        );
      } catch (e) {
        logger.warn('[tg-device] getMessages(batch) failed', {
          subdomain,
          chatId: upserted.chatId,
          error: e?.message || e
        });
        break;
      }
      if (!batch || batch.length === 0) break;
      for (const m of batch) {
        await insertMtprotoHistory(client, subdomain, upserted.chatId, upserted.conversationId, m);
      }
      total += batch.length;
      batches += 1;
      const tail = batch[batch.length - 1];
      const tailId = tail?.id != null ? Number(tail.id) : 0;
      if (!tailId || batch.length < batchSize) break;
      if (prevTailId != null && tailId >= prevTailId) break;
      prevTailId = tailId;
      offsetId = tailId;
    }
    return true;
  }

  let messages = [];
  try {
    messages = await withTimeout(
      client.getMessages(peer, { limit }),
      12000,
      'MTProto history timeout'
    );
  } catch (e) {
    logger.warn('[tg-device] getMessages failed', {
      subdomain,
      chatId: upserted.chatId,
      error: e?.message || e
    });
    return false;
  }
  for (const m of messages || []) {
    await insertMtprotoHistory(client, subdomain, upserted.chatId, upserted.conversationId, m);
  }
  return true;
}

async function syncMtprotoHistory(client, subdomain) {
  const dialogs = await client.getDialogs({ limit: 80 });
  for (const dialog of dialogs) {
    await syncMtprotoHistoryForDialog(client, subdomain, dialog, { limit: 25 });
  }
}

function attachInboundHandler(client, subdomain) {
  const handler = async (event) => {
    try {
      const msg = event.message;
      if (!msg) return;
      const text = normalizeText(msg.message);
      const mediaMeta = detectMtprotoMedia(msg);
      if (!text && !mediaMeta) return;
      const telegramChatId = String(getPeerId(msg.peerId, true));
      if (!messageHandler || !telegramChatId) return;
      const senderName =
        msg?.sender?.username
          ? `@${msg.sender.username}`
          : [msg?.sender?.firstName, msg?.sender?.lastName].filter(Boolean).join(' ').trim() || null;
      const externalMessageId = msg?.id != null ? String(msg.id) : null;
      const mediaUrl = mediaMeta?.mediaType
        ? await saveMtprotoMedia(client, msg, subdomain, telegramChatId, externalMessageId, mediaMeta)
        : null;
      await messageHandler({
        subdomain,
        telegramChatId,
        text,
        direction: msg?.out ? 'outgoing' : 'incoming',
        status: toMessageStatus(msg),
        externalMessageId,
        createdAt: msg?.date || null,
        senderName,
        mediaType: mediaMeta?.mediaType || null,
        mediaUrl,
        mimeType: mediaMeta?.mimeType || null,
        mediaDuration: mediaMeta?.duration || null
      });
      queueMtprotoHistorySyncForChat(subdomain, telegramChatId, { force: true, limit: 200, full: false });
    } catch (e) {
      logger.error('[tg-device] inbound', e);
    }
  };
  client.addEventHandler(handler, new NewMessage({}));
  return handler;
}

async function connectSavedSessionWithDc({ sessionString, apiId, apiHash, dc, timeoutMs = 20000 }) {
  const stringSession = new StringSession(String(sessionString));
  try {
    if (dc) stringSession.setDC(dc.dcId, dc.ip, dc.port);
  } catch (_) {}
  const client = new TelegramClient(
    stringSession,
    apiId,
    apiHash,
    {
      connection: ConnectionTCPObfuscated,
      useWSS: true,
      connectionRetries: 2,
      autoReconnect: true
    }
  );
  await withTimeout(
    client.connect(),
    timeoutMs,
    `Не удалось восстановить MTProto-сессию (${dc ? `${dc.ip}:${dc.port}` : 'default'})`
  );
  return client;
}

function startMtprotoHealthMonitor() {
  if (global.mtprotoHealthMonitorStarted) return;
  global.mtprotoHealthMonitorStarted = true;
  setInterval(async () => {
    const map = global.mtprotoBySubdomain;
    if (!map || map.size === 0) return;
    for (const [subdomain, payload] of map.entries()) {
      const client = payload?.client;
      if (!client) continue;
      try {
        await withTimeout(client.getMe(), 15000, 'MTProto heartbeat timeout');
      } catch (e) {
        logger.warn('[tg-device] heartbeat failed', { subdomain, error: e?.message || e });
        try {
          if (payload?.handler) client.removeEventHandler(payload.handler);
          await client.disconnect();
        } catch (_) {}
        map.delete(subdomain);
      }
    }
  }, 45000);
}

async function runAuthFlow(state, apiId, apiHash) {
  if (state.running) return;
  state.running = true;
  await disconnectExistingMtproto(state.subdomain);

  const nextAttempt = (state.attempt || 0) + 1;
  const dc = pickDcEndpoint(nextAttempt);
  const stringSession = new StringSession('');
  try {
    stringSession.setDC(dc.dcId, dc.ip, dc.port);
  } catch (_) {}
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connection: ConnectionTCPObfuscated,
    useWSS: true,
    connectionRetries: 5,
    autoReconnect: true
  });

  state.client = client;

  try {
    state.attempt = (state.attempt || 0) + 1;
    state.lastAttemptAt = Date.now();
    state.status = 'starting';
    state.error = null;
    state.retryAfterMs = null;
    state.retryAt = null;
    state.dc = `${dc.ip}:${dc.port}`;
    logger.info('[tg-device] attempt start', {
      subdomain: state.subdomain,
      attempt: state.attempt,
      dc: state.dc
    });

    await withTimeout(
      client.connect(),
      45000,
      'Не удалось подключиться к Telegram (таймаут 45с). Проверьте сеть сервера и повторите.'
    );
    state.status = 'pending_scan';

    const user = await withTimeout(
      client.signInUserWithQrCode(
        { apiId, apiHash },
        {
          onError: async (err) => {
            const msg = String((err && err.message) || err || '');
            const low = msg.toLowerCase();
            logger.error('[tg-device] onError', msg);

            if (low.includes('password_hash_invalid') || low.includes('invalid password')) {
              // Не роняем сессию: оставляем режим ожидания 2FA, чтобы пользователь мог ввести пароль снова.
              state.status = 'password_needed';
              state.error = 'Неверный облачный пароль Telegram. Попробуйте снова.';
              return false;
            }

            if (!state.error) state.error = msg;
            state.status = 'error';
            return true;
          },
          qrCode: async (code) => {
            state.qrLink = createQrDeepLink(code.token);
            state.qrExpiresAt = code.expires;
            state.status = 'pending_scan';
            // Не блокируем auth flow длинным sleep: это может выглядеть как
            // "QR отсканирован, но ничего не происходит".
            await new Promise((r) => setTimeout(r, 200));
          },
          password: async (hint) => {
            state.status = 'password_needed';
            state.passwordHint = hint ? String(hint) : '';
            return await new Promise((resolve, reject) => {
              state.passwordResolve = resolve;
              state.passwordReject = reject;
              state.passwordTimer = setTimeout(() => {
                state.passwordResolve = null;
                state.passwordReject = null;
                reject(new Error('Таймаут ввода пароля 2FA (3 мин)'));
              }, 180000);
            });
          }
        }
      ),
      90000,
      'Не удалось получить QR от Telegram (таймаут 90с). Попробуйте ещё раз.'
    );

    if (state.passwordTimer) {
      clearTimeout(state.passwordTimer);
      state.passwordTimer = null;
    }

    let userId = '';
    if (user && user.id != null) {
      const id = user.id;
      userId =
        typeof id === 'bigint'
          ? id.toString()
          : typeof id === 'object' && typeof id.toString === 'function'
            ? id.toString()
            : String(id);
    }
    const username = user.username || null;
    const saved = client.session.save();

    await new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO telegram_mtproto_sessions (amo_subdomain, session_string, telegram_user_id, username, updated_at)
         VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)`,
        [state.subdomain, saved, userId, username],
        (err) => (err ? reject(err) : resolve())
      );
    });

    await upsertMtprotoDialogs(client, state.subdomain);

    global.mtprotoBySubdomain = global.mtprotoBySubdomain || new Map();

    const handler = attachInboundHandler(client, state.subdomain);

    global.mtprotoBySubdomain.set(state.subdomain, { client, handler });
    startMtprotoHealthMonitor();
    preloadRecentDialogsHistory(client, state.subdomain, 200).catch((e) => {
      logger.warn('[tg-device] preload dialogs failed', {
        subdomain: state.subdomain,
        error: e?.message || e
      });
    });

    state.status = 'authorized';
    state.userId = userId;
    state.username = username;
    state.qrLink = null;
    state.retryAfterMs = null;
    state.retryAt = null;
    clearTimeout(state.retryTimer);
    state.retryTimer = null;

    logger.info('[tg-device] authorized', { subdomain: state.subdomain, userId });
    mtprotoPendingSessionBySubdomain.delete(state.subdomain);

    setTimeout(() => pendingSessions.delete(state.sessionId), 30 * 60 * 1000);
  } catch (e) {
    logger.error('[tg-device] auth failed', e);
    const errText = String(e && (e.message || e) || '');
    const low = errText.toLowerCase();
    const isNetworkRetryable =
      low.includes('timeout') ||
      low.includes('timed out') ||
      low.includes('таймаут') ||
      low.includes('etimedout') ||
      low.includes('econnreset') ||
      low.includes('ehostunreach') ||
      low.includes('network');

    if (isNetworkRetryable && (state.attempt || 0) < (state.maxAttempts || 4)) {
      const retryAfterMs = [2000, 5000, 10000, 15000][Math.min((state.attempt || 1) - 1, 3)];
      state.status = 'starting';
      state.error = `Сеть нестабильна, повторяем подключение (${state.attempt}/${state.maxAttempts})...`;
      state.retryAfterMs = retryAfterMs;
      state.retryAt = Date.now() + retryAfterMs;

      try {
        await client.disconnect();
      } catch (_) {}
      global.mtprotoBySubdomain?.delete(state.subdomain);

      state.running = false;
      clearTimeout(state.retryTimer);
      state.retryTimer = setTimeout(() => {
        runAuthFlow(state, apiId, apiHash).catch((err) => {
          logger.error('[tg-device] retry flow failed', err);
        });
      }, retryAfterMs);
      return;
    }

    state.status = 'error';
    state.error = state.error || errText || 'Unknown error';
    if (state.passwordTimer) {
      clearTimeout(state.passwordTimer);
      state.passwordTimer = null;
    }
    try {
      await client.disconnect();
    } catch (_) {}
    global.mtprotoBySubdomain?.delete(state.subdomain);
    clearTimeout(state.retryTimer);
    state.retryTimer = null;
    state.retryAfterMs = null;
    state.retryAt = null;
    mtprotoPendingSessionBySubdomain.delete(state.subdomain);
    setTimeout(() => pendingSessions.delete(state.sessionId), 120000);
  } finally {
    state.running = false;
  }
}

function startDeviceQrSession(normalizedSubdomain) {
  if (!normalizedSubdomain) {
    throw new Error('subdomain required');
  }
  const apiId = Number(process.env.TELEGRAM_API_ID);
  const apiHash = process.env.TELEGRAM_API_HASH;
  if (!apiId || !apiHash) {
    throw new Error(
      'Задайте TELEGRAM_API_ID и TELEGRAM_API_HASH в .env (https://my.telegram.org → API development tools)'
    );
  }

  const existingSessionId = mtprotoPendingSessionBySubdomain.get(normalizedSubdomain);
  if (existingSessionId) {
    const existing = pendingSessions.get(existingSessionId);
    if (existing) {
      const pendingLike = ['starting', 'pending_scan', 'password_needed'].includes(existing.status);
      if (pendingLike) {
        const lastAttemptAt = Number(existing.lastAttemptAt || 0);
        const startingTooLong =
          existing.status === 'starting' &&
          lastAttemptAt > 0 &&
          Date.now() - lastAttemptAt > 25000;
        const pendingWithoutQr =
          existing.status === 'pending_scan' &&
          !existing.qrLink;
        const canReuseQr =
          existing.status !== 'pending_scan' ||
          (existing.qrLink && !isQrExpired(existing.qrExpiresAt));
        if (!startingTooLong && !pendingWithoutQr && canReuseQr) return existingSessionId;
      }
      try {
        clearTimeout(existing.retryTimer);
        existing.retryTimer = null;
        if (existing.client) {
          existing.client.disconnect().catch(() => {});
        }
      } catch (_) {}
      pendingSessions.delete(existingSessionId);
    }
    mtprotoPendingSessionBySubdomain.delete(normalizedSubdomain);
  }

  const sessionId = crypto.randomBytes(16).toString('hex');
  const state = {
    sessionId,
    subdomain: normalizedSubdomain,
    status: 'starting',
    qrLink: null,
    qrExpiresAt: null,
    error: null,
    passwordResolve: null,
    passwordReject: null,
    passwordTimer: null,
    passwordHint: '',
    client: null,
    userId: null,
    username: null,
    attempt: 0,
    maxAttempts: 4,
    retryAfterMs: null,
    retryAt: null,
    retryTimer: null,
    running: false
  };
  pendingSessions.set(sessionId, state);
  mtprotoPendingSessionBySubdomain.set(normalizedSubdomain, sessionId);

  runAuthFlow(state, apiId, apiHash);

  return sessionId;
}

function getDeviceSession(sessionId) {
  const s = pendingSessions.get(sessionId);
  if (!s) return null;
  if (s.status === 'pending_scan' && s.qrLink && isQrExpired(s.qrExpiresAt)) {
    s.status = 'expired';
    s.error = 'QR истёк. Создайте новый код.';
  }
  return {
    status: s.status,
    qrLink: s.qrLink,
    qrExpiresAt: s.qrExpiresAt,
    error: s.error,
    userId: s.userId,
    username: s.username,
    passwordHint: s.passwordHint,
    attempt: s.attempt || 0,
    maxAttempts: s.maxAttempts || 0,
    retryAfterMs: s.retryAfterMs || null,
    retryAt: s.retryAt || null,
    dc: s.dc || null
  };
}

function submitDevicePassword(sessionId, password) {
  const state = pendingSessions.get(sessionId);
  if (!state || state.status !== 'password_needed' || !state.passwordResolve) {
    return false;
  }
  clearTimeout(state.passwordTimer);
  state.passwordTimer = null;
  const fn = state.passwordResolve;
  state.passwordResolve = null;
  state.passwordReject = null;
  fn(password || '');
  state.status = 'pending_scan';
  return true;
}

async function restoreSavedMtprotoSessions() {
  const apiId = Number(process.env.TELEGRAM_API_ID);
  const apiHash = process.env.TELEGRAM_API_HASH;
  if (!apiId || !apiHash) return;

  const rows = await new Promise((resolve) => {
    db.all(
      `SELECT amo_subdomain, session_string FROM telegram_mtproto_sessions`,
      [],
      (err, list) => resolve(err ? [] : list || [])
    );
  });

  if (!rows.length) return;
  global.mtprotoBySubdomain = global.mtprotoBySubdomain || new Map();

  for (const row of rows) {
    const subdomain = String(row.amo_subdomain || '').trim().toLowerCase();
    const sessionString = String(row.session_string || '');
    if (!subdomain || !sessionString) continue;
    try {
      const client = new TelegramClient(
        new StringSession(sessionString),
        apiId,
        apiHash,
        {
          connection: ConnectionTCPObfuscated,
          useWSS: true,
          connectionRetries: 5,
          autoReconnect: true
        }
      );
      await client.connect();
      await upsertMtprotoDialogs(client, subdomain);

      const handler = attachInboundHandler(client, subdomain);
      global.mtprotoBySubdomain.set(subdomain, { client, handler });
      startMtprotoHealthMonitor();
      preloadRecentDialogsHistory(client, subdomain, 200).catch((e) => {
        logger.warn('[tg-device] preload dialogs failed', {
          subdomain,
          error: e?.message || e
        });
      });
      logger.info('[tg-device] restored mtproto session', { subdomain });
    } catch (e) {
      const msg = String(e?.message || e || '');
      if (isInvalidSessionError(msg)) {
        await new Promise((resolve) => {
          db.run(
            `DELETE FROM telegram_mtproto_sessions WHERE amo_subdomain = ?`,
            [subdomain],
            () => resolve()
          );
        });
      }
      logger.error('[tg-device] restore failed', { subdomain, error: e?.message || e });
    }
  }
}

async function ensureMtprotoClient(subdomain, options = {}) {
  const normalized = String(subdomain || '').trim().toLowerCase();
  if (!normalized) return null;
  global.mtprotoBySubdomain = global.mtprotoBySubdomain || new Map();
  const existing = global.mtprotoBySubdomain.get(normalized);
  const forceReconnect = Boolean(options?.forceReconnect);
  if (existing?.client && !forceReconnect) return existing.client;
  if (mtprotoEnsureInflight.has(normalized)) {
    return mtprotoEnsureInflight.get(normalized);
  }
  const ensureTask = (async () => {
  if (existing?.client && forceReconnect) {
    try {
      if (existing?.handler) existing.client.removeEventHandler(existing.handler);
      await existing.client.disconnect();
    } catch (_) {}
    global.mtprotoBySubdomain.delete(normalized);
  }

  const apiId = Number(process.env.TELEGRAM_API_ID);
  const apiHash = process.env.TELEGRAM_API_HASH;
  if (!apiId || !apiHash) return null;

  const row = await new Promise((resolve) => {
    db.get(
      `SELECT session_string FROM telegram_mtproto_sessions WHERE amo_subdomain = ?`,
      [normalized],
      (err, r) => resolve(err ? null : r || null)
    );
  });
  if (!row?.session_string) return null;

  const pool = [null, ...getDcPool()];
  const maxAttempts = Math.min(pool.length, 5);
  let lastErr = null;
  for (let i = 0; i < maxAttempts; i += 1) {
    const dc = pool[i];
    let client = null;
    try {
      client = await connectSavedSessionWithDc({
        sessionString: row.session_string,
        apiId,
        apiHash,
        dc,
        timeoutMs: 18000
      });
      const handler = attachInboundHandler(client, normalized);
      global.mtprotoBySubdomain.set(normalized, { client, handler });
      startMtprotoHealthMonitor();
      return client;
    } catch (e) {
      lastErr = e;
      try { if (client) await client.disconnect(); } catch (_) {}
      continue;
    }
  }

  if (lastErr) {
    const e = lastErr;
    const msg = String(e?.message || e || '');
    if (isInvalidSessionError(msg)) {
      await new Promise((resolve) => {
        db.run(
          `DELETE FROM telegram_mtproto_sessions WHERE amo_subdomain = ?`,
          [normalized],
          () => resolve()
        );
      });
    }
    logger.warn('[tg-device] ensure client failed', {
      subdomain: normalized,
      error: msg
    });
  }
  return null;
  })();
  mtprotoEnsureInflight.set(normalized, ensureTask);
  try {
    return await ensureTask;
  } finally {
    if (mtprotoEnsureInflight.get(normalized) === ensureTask) {
      mtprotoEnsureInflight.delete(normalized);
    }
  }
}

async function syncMtprotoHistoryForChat(subdomain, telegramChatId, options = {}) {
  const normalizedSubdomain = String(subdomain || '').trim().toLowerCase();
  const normalizedChatId = String(telegramChatId || '').trim();
  if (!normalizedSubdomain || !normalizedChatId) return false;
  const limit = Number.isFinite(options.limit) ? Math.max(1, Math.min(options.limit, 200)) : 30;
  const full = Boolean(options.full);
  const force = Boolean(options.force);
  const requireActiveClient = Boolean(options.requireActiveClient);
  const key = `${normalizedSubdomain}:${normalizedChatId}`;
  if (!shouldSyncHistoryNow(key, force)) return false;

  const existingClient = global.mtprotoBySubdomain?.get(normalizedSubdomain)?.client || null;
  const client = requireActiveClient
    ? existingClient
    : (existingClient || await ensureMtprotoClient(normalizedSubdomain));
  if (!client) return false;
  let dialogs = [];
  try {
    dialogs = await withTimeout(
      client.getDialogs({ limit: 200 }),
      12000,
      'MTProto dialogs timeout'
    );
  } catch (e) {
    const msg = String(e?.message || e || '');
    if (isInvalidSessionError(msg)) {
      await purgeInvalidSession(normalizedSubdomain, client);
    }
    return false;
  }
  const targetDialog = (dialogs || []).find((d) => String(d?.id || '') === normalizedChatId);
  if (!targetDialog) return false;
  return syncMtprotoHistoryForDialog(client, normalizedSubdomain, targetDialog, { full, limit });
}

async function syncRecentDialogsForSubdomain(subdomain, options = {}) {
  const normalizedSubdomain = String(subdomain || '').trim().toLowerCase();
  if (!normalizedSubdomain) return { syncedChats: 0, dialogsTotal: 0, historyQueued: 0 };
  const dialogsLimit = Number.isFinite(Number(options.dialogsLimit))
    ? Math.max(1, Math.min(Number(options.dialogsLimit), 200))
    : 200;
  const historyLimit = Number.isFinite(Number(options.historyLimit))
    ? Math.max(1, Math.min(Number(options.historyLimit), 200))
    : 200;
  const queueHistory = options.queueHistory !== false;
  const fullHistory = Boolean(options.full);
  const client = await ensureMtprotoClient(normalizedSubdomain);
  if (!client) {
    throw new Error('MTProto session is not active for this subdomain. Переподключите Telegram Personal (QR).');
  }
  const dialogs = await withTimeout(
    client.getDialogs({ limit: dialogsLimit }),
    20000,
    'MTProto dialogs timeout'
  );
  let syncedChats = 0;
  let historyQueued = 0;
  for (const dialog of dialogs || []) {
    const upserted = await upsertMtprotoDialog(dialog, normalizedSubdomain);
    if (upserted?.conversationId) syncedChats += 1;
    const chatId = dialog?.id != null ? String(dialog.id) : '';
    if (!chatId) continue;
    if (queueHistory) {
      const queued = queueMtprotoHistorySyncForChat(normalizedSubdomain, chatId, {
        force: true,
        full: fullHistory,
        limit: historyLimit
      });
      if (queued) historyQueued += 1;
    } else {
      const ok = await syncMtprotoHistoryForDialog(client, normalizedSubdomain, dialog, {
        force: true,
        full: fullHistory,
        limit: historyLimit
      });
      if (ok) historyQueued += 1;
    }
  }
  return {
    syncedChats,
    dialogsTotal: (dialogs || []).length,
    historyQueued,
    dialogsLimit,
    historyLimit
  };
}

module.exports = {
  setLogger,
  setMessageHandler,
  startDeviceQrSession,
  getDeviceSession,
  submitDevicePassword,
  restoreSavedMtprotoSessions,
  ensureMtprotoClient,
  syncMtprotoHistoryForChat,
  queueMtprotoHistorySyncForChat,
  syncRecentDialogsForSubdomain
};
