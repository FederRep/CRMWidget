'use strict';

const crypto = require('crypto');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const { NewMessage } = require('telegram/events');
const { getPeerId } = require('telegram/Utils');
const db = require('./database');

let logger = console;
let messageHandler = null;

/** @type {Map<string, object>} */
const pendingSessions = new Map();

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

async function upsertMtprotoDialogs(client, subdomain) {
  const dialogs = await client.getDialogs({ limit: 5 });
  for (const d of dialogs) {
    const chatId = d.id != null ? d.id.toString() : null;
    if (!chatId) continue;
    await new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO conversations (telegram_chat_id, telegram_user_id, amo_subdomain, channel)
         VALUES (?, ?, ?, 'telegram_mtproto')
         ON CONFLICT(telegram_chat_id) DO UPDATE SET
           amo_subdomain = excluded.amo_subdomain,
           telegram_user_id = excluded.telegram_user_id,
           channel = excluded.channel`,
        [chatId, chatId, subdomain],
        (err) => (err ? reject(err) : resolve())
      );
    });
  }
}

async function runAuthFlow(state, apiId, apiHash) {
  await disconnectExistingMtproto(state.subdomain);

  const stringSession = new StringSession('');
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
    autoReconnect: true
  });

  state.client = client;

  try {
    await client.connect();
    state.status = 'pending_scan';

    const user = await client.signInUserWithQrCode(
      { apiId, apiHash },
      {
        onError: async (err) => {
          logger.error('[tg-device] onError', err);
          if (!state.error) state.error = err.message || String(err);
          state.status = 'error';
          return true;
        },
        qrCode: async (code) => {
          state.qrLink = createQrDeepLink(code.token);
          state.qrExpiresAt = code.expires;
          state.status = 'pending_scan';
          await new Promise((r) => setTimeout(r, 28000));
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

    const handler = async (event) => {
      try {
        const msg = event.message;
        if (!msg || msg.message == null) return;
        const text = String(msg.message);
        const telegramChatId = String(getPeerId(msg.peerId, true));
        if (!messageHandler || !telegramChatId) return;
        await messageHandler({ subdomain: state.subdomain, telegramChatId, text });
      } catch (e) {
        logger.error('[tg-device] inbound', e);
      }
    };

    client.addEventHandler(handler, new NewMessage({ incoming: true }));

    global.mtprotoBySubdomain.set(state.subdomain, { client, handler });

    state.status = 'authorized';
    state.userId = userId;
    state.username = username;
    state.qrLink = null;

    logger.info('[tg-device] authorized', { subdomain: state.subdomain, userId });

    setTimeout(() => pendingSessions.delete(state.sessionId), 30 * 60 * 1000);
  } catch (e) {
    logger.error('[tg-device] auth failed', e);
    state.status = 'error';
    state.error = state.error || e.message || String(e);
    if (state.passwordTimer) {
      clearTimeout(state.passwordTimer);
      state.passwordTimer = null;
    }
    try {
      await client.disconnect();
    } catch (_) {}
    global.mtprotoBySubdomain?.delete(state.subdomain);
    setTimeout(() => pendingSessions.delete(state.sessionId), 120000);
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
    username: null
  };
  pendingSessions.set(sessionId, state);

  runAuthFlow(state, apiId, apiHash);

  return sessionId;
}

function getDeviceSession(sessionId) {
  const s = pendingSessions.get(sessionId);
  if (!s) return null;
  return {
    status: s.status,
    qrLink: s.qrLink,
    qrExpiresAt: s.qrExpiresAt,
    error: s.error,
    userId: s.userId,
    username: s.username,
    passwordHint: s.passwordHint
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

module.exports = {
  setLogger,
  setMessageHandler,
  startDeviceQrSession,
  getDeviceSession,
  submitDevicePassword
};
