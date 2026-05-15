import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './AmoHubPage.css';

export default function AmoHubPage() {
  const [searchParams] = useSearchParams();
  const embedded = searchParams.get('embedded') === '1';
  const qpSubdomain = (searchParams.get('subdomain') || '').trim();

  const [subdomain, setSubdomain] = useState(qpSubdomain);
  const [amoAuthorized, setAmoAuthorized] = useState(null);
  const [chats, setChats] = useState([]);
  const [loadError, setLoadError] = useState('');
  const [qrImage, setQrImage] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [qrHint, setQrHint] = useState('');
  const [qrBusy, setQrBusy] = useState(false);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messagesError, setMessagesError] = useState('');
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [outgoingText, setOutgoingText] = useState('');
  const [sendBusy, setSendBusy] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [setupOpen, setSetupOpen] = useState(false);
  const [linkedUsers, setLinkedUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [syncBusy, setSyncBusy] = useState(false);
  const [multiChatOpen, setMultiChatOpen] = useState(false);
  const [multiSelectedUsers, setMultiSelectedUsers] = useState([]);
  const [multiText, setMultiText] = useState('');
  const [multiAttachments, setMultiAttachments] = useState([]);
  const [multiSendBusy, setMultiSendBusy] = useState(false);
  const [telegramMode, setTelegramMode] = useState('hybrid');
  const isBotOnly = telegramMode === 'bot_only';

  const [devSessionId, setDevSessionId] = useState(null);
  const [devQrImage, setDevQrImage] = useState(null);
  const [devQrData, setDevQrData] = useState('');
  const [devHint, setDevHint] = useState('');
  const [devBusy, setDevBusy] = useState(false);
  const [devPasswordNeeded, setDevPasswordNeeded] = useState(false);
  const [devPassword, setDevPassword] = useState('');
  const [devPasswordSubmitting, setDevPasswordSubmitting] = useState(false);

  useEffect(() => {
    if (qpSubdomain) setSubdomain(qpSubdomain);
  }, [qpSubdomain]);

  const refreshTelegramConfig = useCallback(async () => {
    try {
      const r = await fetch('/api/telegram/config');
      if (!r.ok) return;
      const j = await r.json();
      setTelegramMode(String(j.mode || 'hybrid').toLowerCase());
    } catch {
      /* keep previous mode */
    }
  }, []);

  const refreshAmoStatus = useCallback(async () => {
    const s = subdomain.trim().toLowerCase();
    if (!s) {
      setAmoAuthorized(null);
      return;
    }
    try {
      const r = await fetch(`/api/auth/status?subdomain=${encodeURIComponent(s)}`);
      const j = await r.json();
      setAmoAuthorized(!!j.authorized);
    } catch {
      setAmoAuthorized(false);
    }
  }, [subdomain]);

  const refreshChats = useCallback(async () => {
    const s = subdomain.trim().toLowerCase();
    setLoadError('');
    if (!s) {
      setChats([]);
      return;
    }
    try {
      const params = new URLSearchParams({
        subdomain: s,
        limit: '25',
      });
      if (searchQuery.trim()) params.set('q', searchQuery.trim());
      if (unreadOnly) params.set('unreadOnly', '1');
      if (selectedUserId) params.set('userId', selectedUserId);
      const r = await fetch(`/api/telegram/conversations?${params.toString()}`);
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || r.statusText);
      }
      const j = await r.json();
      setChats(j.conversations || []);
    } catch (e) {
      setLoadError(e.message || 'Не удалось загрузить чаты');
      setChats([]);
    }
  }, [subdomain, searchQuery, unreadOnly, selectedUserId]);

  const refreshUsers = useCallback(async () => {
    const s = subdomain.trim().toLowerCase();
    if (!s) {
      setLinkedUsers([]);
      return;
    }
    try {
      const r = await fetch(`/api/telegram/users?subdomain=${encodeURIComponent(s)}`);
      if (!r.ok) throw new Error('users failed');
      const j = await r.json();
      const users = Array.isArray(j.users) ? j.users : [];
      setLinkedUsers(users);
      setMultiSelectedUsers((prev) => prev.filter((id) => users.some((u) => u.id === id)));
      if (selectedUserId && !users.some((u) => u.id === selectedUserId)) {
        setSelectedUserId('');
      }
    } catch {
      setLinkedUsers([]);
    }
  }, [subdomain, selectedUserId]);

  const syncRecentChats = useCallback(async () => {
    if (isBotOnly) return;
    const s = subdomain.trim().toLowerCase();
    if (!s || syncBusy) return;
    setSyncBusy(true);
    try {
      const r = await fetch('/api/telegram/sync/recent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: s, dialogsLimit: 200, historyLimit: 200 }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || 'sync failed');
      setDevHint(
        `Чатов в списке: ${j.syncedChats ?? 0}${j.historyQueued != null ? `, история в очереди: ${j.historyQueued}` : ''}`
      );
      await refreshChats();
      await refreshUsers();
    } catch (e) {
      setDevHint(e.message || 'Не удалось синхронизировать чаты');
    } finally {
      setSyncBusy(false);
    }
  }, [subdomain, syncBusy, refreshChats, refreshUsers, isBotOnly]);

  const loadMessages = useCallback(async (conversationId) => {
    const s = subdomain.trim().toLowerCase();
    if (!conversationId || !s) {
      setMessages([]);
      setMessagesError('');
      return;
    }
    setMessagesLoading(true);
    setMessagesError('');
    try {
      const r = await fetch(
        `/api/telegram/conversations/${conversationId}/messages?subdomain=${encodeURIComponent(s)}&limit=100`
      );
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || r.statusText);
      }
      const j = await r.json();
      setMessages(j.messages || []);
    } catch (e) {
      setMessagesError(e.message || 'Не удалось загрузить сообщения');
      setMessages([]);
    } finally {
      setMessagesLoading(false);
    }
  }, [subdomain]);

  useEffect(() => {
    refreshTelegramConfig();
  }, [refreshTelegramConfig]);

  useEffect(() => {
    refreshAmoStatus();
  }, [refreshAmoStatus]);

  useEffect(() => {
    refreshChats();
  }, [refreshChats]);

  useEffect(() => {
    refreshUsers();
  }, [refreshUsers]);

  useEffect(() => {
    const timer = setInterval(() => {
      refreshChats();
      refreshUsers();
    }, 5000);
    return () => clearInterval(timer);
  }, [refreshChats, refreshUsers]);

  useEffect(() => {
    if (!selectedConversationId) return;
    loadMessages(selectedConversationId);
  }, [selectedConversationId, loadMessages]);

  useEffect(() => {
    if (!selectedConversationId) return undefined;
    const timer = setInterval(() => {
      loadMessages(selectedConversationId);
    }, 3000);
    return () => clearInterval(timer);
  }, [selectedConversationId, loadMessages]);

  useEffect(() => {
    if (!sessionId) return undefined;
    const t = setInterval(async () => {
      try {
        const r = await fetch(`/api/auth/telegram/qr/${sessionId}`);
        if (!r.ok) {
          if (r.status === 404) {
            setQrHint('Сессия больше не найдена. Создайте новый QR.');
            setQrImage(null);
            setSessionId(null);
            setQrBusy(false);
          }
          return;
        }
        const j = await r.json();
        if (j.status === 'authorized') {
          setQrHint('Telegram (бот) подключён ✅ Обновляем список…');
          setQrImage(null);
          setSessionId(null);
          setQrBusy(false);
          refreshChats();
          refreshUsers();
          if (!isBotOnly) syncRecentChats();
        } else if (j.status === 'expired') {
          setQrHint('Сессия QR истекла. Создайте новый код.');
          setQrImage(null);
          setSessionId(null);
          setQrBusy(false);
        }
      } catch {
        /* ignore */
      }
    }, 2500);
    return () => clearInterval(t);
  }, [sessionId, refreshChats, refreshUsers, syncRecentChats, isBotOnly]);

  useEffect(() => {
    if (!devSessionId) return undefined;
    const t = setInterval(async () => {
      try {
        const r = await fetch(`/api/auth/telegram/device/${devSessionId}`);
        if (!r.ok) {
          if (r.status === 404) {
            setDevHint('Сессия истекла/закрыта. Нажмите "Показать QR" снова.');
            setDevQrImage(null);
            setDevQrData('');
            setDevBusy(false);
            setDevPasswordNeeded(false);
            setDevSessionId(null);
          }
          return;
        }
        const j = await r.json();
        if (j.qrImage) setDevQrImage(j.qrImage);
        if (j.qrData) setDevQrData(j.qrData);
        if (j.status === 'password_needed') {
          setDevPasswordNeeded(true);
          setDevHint(j.passwordHint ? `2FA: подсказка «${j.passwordHint}»` : 'Введите пароль двухфакторной аутентификации Telegram');
        }
        if (j.status === 'pending_scan' && !devPasswordNeeded) {
          setDevHint('Откройте Telegram → Настройки → Устройства → Связать устройство → отсканируйте QR.');
        }
        if (j.status === 'authorized') {
          setDevHint(`Аккаунт Telegram подключён (устройство) ✅ ${j.username ? '@' + j.username : ''}`);
          setDevQrImage(null);
          setDevQrData('');
          setDevSessionId(null);
          setDevBusy(false);
          setDevPasswordNeeded(false);
          refreshChats();
          refreshUsers();
          if (!isBotOnly) syncRecentChats();
        }
        if (j.status === 'error') {
          if (j.reason === 'qridle') {
            setDevHint(
              (j.error || 'Сессия не удержалась по сети.') +
              ' Нажмите кнопку ещё раз, чтобы пересоздать QR.'
            );
          } else {
            setDevHint(j.error || 'Ошибка авторизации');
          }
          setDevQrImage(null);
          setDevQrData('');
          setDevBusy(false);
          setDevPasswordNeeded(false);
          setDevSessionId(null);
        }
        if (j.status === 'starting') {
          if (j.retryAfterMs) {
            const sec = Math.max(1, Math.round(j.retryAfterMs / 1000));
            setDevHint(`Подключаемся к Telegram… сеть нестабильна, автоповтор через ${sec}с.`);
          } else {
            setDevHint('Подключаемся к Telegram…');
          }
        }
      } catch {
        /* ignore */
      }
    }, 2000);
    return () => clearInterval(t);
  }, [devSessionId, devPasswordNeeded, refreshChats, refreshUsers, syncRecentChats, isBotOnly]);

  const startQr = async () => {
    const s = subdomain.trim().toLowerCase();
    if (!s) {
      setQrHint('Укажите поддомен amoCRM (например company из company.amocrm.ru)');
      return;
    }
    setQrBusy(true);
    setQrHint('Готовим QR…');
    setQrImage(null);
    setSessionId(null);
    try {
      const r = await fetch(`/api/auth/telegram/qr?subdomain=${encodeURIComponent(s)}`, { method: 'GET' });
      const j = await r.json();
      if (!j.sessionId || !j.qrImage) throw new Error('Некорректный ответ сервера');
      setQrImage(j.qrImage);
      setSessionId(j.sessionId);
      setQrHint('Откройте Telegram → сканируйте QR → нажмите Start у бота.');
    } catch (e) {
      setQrHint(e.message || 'Не удалось создать QR. Проверьте TELEGRAM_BOT_USERNAME и токен бота на сервере.');
      setQrBusy(false);
    }
  };

  const startDeviceQr = async () => {
    const s = subdomain.trim().toLowerCase();
    if (!s) {
      setDevHint('Укажите поддомен amoCRM');
      return;
    }
    setDevBusy(true);
    setDevHint('Запуск MTProto-сессии…');
    setDevQrImage(null);
    setDevQrData('');
    setDevSessionId(null);
    setDevPasswordNeeded(false);
    setDevPassword('');
    try {
      const r = await fetch('/api/auth/telegram/device/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: s }),
      });
      const j = await r.json();
      if (!j.sessionId) throw new Error(j.error || 'Не удалось начать сессию');
      setDevSessionId(j.sessionId);
      if (j.qrImage) {
        setDevQrImage(j.qrImage);
        if (j.qrData) setDevQrData(j.qrData);
        setDevHint('Сканируйте QR в Telegram → Настройки → Устройства.');
      } else {
        setDevHint('Подключение… через пару секунд появится QR.');
      }
    } catch (e) {
      setDevHint(e.message || 'Ошибка. Задайте на сервере TELEGRAM_API_ID и TELEGRAM_API_HASH (my.telegram.org).');
      setDevBusy(false);
    }
  };

  const submitDevicePassword = async () => {
    if (!devSessionId || !devPassword.trim()) return;
    setDevPasswordSubmitting(true);
    try {
      const resp = await fetch(`/api/auth/telegram/device/${devSessionId}/password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: devPassword }),
      });
      const body = await resp.json().catch(() => ({}));
      if (!resp.ok || body.ok === false) {
        throw new Error(body.error || 'Сервер не принял пароль 2FA');
      }
      setDevPasswordNeeded(false);
      setDevPassword('');
      setDevHint('Проверка пароля…');
    } catch (e) {
      setDevHint(e.message || 'Не удалось отправить пароль');
    } finally {
      setDevPasswordSubmitting(false);
    }
  };

  const sNorm = subdomain.trim().toLowerCase();
  const oauthHref = sNorm ? `/oauth?subdomain=${encodeURIComponent(sNorm)}` : '/oauth';
  const selectedConversation = chats.find((c) => c.id === selectedConversationId) || null;
  const statusMark = (m) => {
    if (m.direction !== 'outgoing') return '';
    if (m.status === 'read') return '✓✓';
    if (m.status === 'failed') return '!';
    if (m.status === 'pending') return '◷';
    return '✓';
  };

  const parseDbDate = (value) => {
    if (!value) return null;
    if (value instanceof Date) return value;
    const raw = String(value).trim();
    if (!raw) return null;
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(raw)) {
      const dt = new Date(raw.replace(' ', 'T') + 'Z');
      return Number.isNaN(dt.getTime()) ? null : dt;
    }
    const dt = new Date(raw);
    return Number.isNaN(dt.getTime()) ? null : dt;
  };

  const shortTime = (value) => {
    const d = parseDbDate(value);
    if (!d) return '';
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const avatarLabel = (title) => {
    const t = String(title || '').trim();
    if (!t) return 'C';
    return t.slice(0, 1).toUpperCase();
  };

  const avatarColor = (seed) => {
    const palette = ['#4fa2f5', '#9b7df7', '#4cc6a6', '#f08b66', '#5f9ea0', '#748ffc'];
    let acc = 0;
    const src = String(seed || '');
    for (let i = 0; i < src.length; i += 1) acc += src.charCodeAt(i);
    return palette[acc % palette.length];
  };

  const markConversationRead = useCallback(async (conversationId) => {
    if (!conversationId || !sNorm) return;
    try {
      await fetch(`/api/telegram/conversations/${conversationId}/read`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subdomain: sNorm }),
      });
      refreshChats();
    } catch {
      /* ignore */
    }
  }, [sNorm, refreshChats]);

  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
    markConversationRead(conversationId);
  };

  const toBase64Payload = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === 'string' ? reader.result : '';
        resolve({
          name: file.name,
          mime: file.type || 'application/octet-stream',
          base64: result,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleAddAttachments = async (files) => {
    const list = Array.from(files || []).slice(0, 5);
    if (list.length === 0) return;
    try {
      const mapped = await Promise.all(list.map(toBase64Payload));
      setAttachments((prev) => [...prev, ...mapped].slice(0, 5));
    } catch {
      setMessagesError('Не удалось прочитать вложения');
    }
  };

  const handleAddMultiAttachments = async (files) => {
    const list = Array.from(files || []).slice(0, 5);
    if (list.length === 0) return;
    try {
      const mapped = await Promise.all(list.map(toBase64Payload));
      setMultiAttachments((prev) => [...prev, ...mapped].slice(0, 5));
    } catch {
      setMessagesError('Не удалось прочитать файлы для мультичата');
    }
  };

  const toggleMultiUser = (userId) => {
    setMultiSelectedUsers((prev) => {
      if (prev.includes(userId)) return prev.filter((id) => id !== userId);
      return [...prev, userId];
    });
  };

  const sendMultiChatMessage = async () => {
    if (multiSendBusy) return;
    if (!sNorm || multiSelectedUsers.length === 0) return;
    const hasText = Boolean(multiText.trim());
    const hasFiles = multiAttachments.length > 0;
    if (!hasText && !hasFiles) return;
    setMultiSendBusy(true);
    setMessagesError('');
    try {
      const r = await fetch('/api/telegram/multichat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subdomain: sNorm,
          userIds: multiSelectedUsers,
          text: multiText.trim(),
          attachments: multiAttachments,
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || 'Не удалось отправить мультичат');
      setMultiText('');
      setMultiAttachments([]);
      await refreshChats();
      await refreshUsers();
      if (selectedConversationId) {
        await loadMessages(selectedConversationId);
      }
    } catch (e) {
      setMessagesError(e.message || 'Ошибка отправки мультичата');
    } finally {
      setMultiSendBusy(false);
    }
  };

  const sendMessageToTelegram = async () => {
    if (!selectedConversation || sendBusy) return;
    const hasText = Boolean(outgoingText.trim());
    const hasFiles = attachments.length > 0;
    if (!hasText && !hasFiles) return;
    setSendBusy(true);
    setMessagesError('');
    try {
      const r = await fetch(`/api/telegram/conversations/${selectedConversation.id}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subdomain: sNorm,
          text: outgoingText.trim(),
          attachments,
        }),
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || r.statusText);
      }
      setOutgoingText('');
      setAttachments([]);
      await loadMessages(selectedConversation.id);
      await refreshChats();
    } catch (e) {
      setMessagesError(e.message || 'Не удалось отправить сообщение');
    } finally {
      setSendBusy(false);
    }
  };

  return (
    <div className={`amo-hub ${embedded ? 'amo-hub--embedded' : ''}`}>
      <header className="amo-hub__topbar">
        <div>
          {!embedded && <h1 className="amo-hub__title">Corsa Messenger</h1>}
          <p className="amo-hub__lead">
            {isBotOnly
              ? 'Только бот (без личного Telegram).'
              : 'Telegram Personal + CRM: все чаты, история, отправка из amoCRM (как Wazzup).'}
          </p>
        </div>
        <div className="amo-hub__topbar-controls">
          <input
            className="amo-hub__input"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            placeholder="Поддомен amoCRM"
          />
          <button type="button" className="amo-hub__btn" onClick={() => { refreshAmoStatus(); refreshChats(); }}>
            Обновить
          </button>
          {sNorm && (
            <a className="amo-hub__btn amo-hub__btn--primary" href={oauthHref} target="_blank" rel="noreferrer">
              OAuth
            </a>
          )}
          <button type="button" className="amo-hub__btn" onClick={() => setSetupOpen((v) => !v)}>
            {setupOpen ? 'Скрыть настройки' : 'Настройка каналов'}
          </button>
        </div>
      </header>

      {setupOpen && (
        <section className="amo-hub__card">
          <h2>Подключение каналов</h2>
          {isBotOnly && (
            <p className="amo-hub__ok">
              Режим только-бот: отсканируйте QR бота → Start. Для личного аккаунта нужен hybrid на сервере.
            </p>
          )}
          {!isBotOnly && (
            <p className="amo-hub__ok">
              Telegram Personal: QR «Связать устройство» → после входа подтянутся чаты и история (до 200 на чат).
            </p>
          )}
          {amoAuthorized === true && <p className="amo-hub__ok">OAuth активен — можно синхронизировать сообщения в карточки.</p>}
          {amoAuthorized === false && <p className="amo-hub__warn">OAuth не активирован. Нажмите OAuth в шапке и разрешите доступ.</p>}
          <div className="amo-hub__row">
            {!isBotOnly && (
              <button type="button" className="amo-hub__btn amo-hub__btn--primary" disabled={devBusy} onClick={startDeviceQr}>
                {devBusy && devSessionId ? 'Ожидание…' : 'Telegram Personal (QR)'}
              </button>
            )}
            <button type="button" className="amo-hub__btn" disabled={qrBusy} onClick={startQr}>
              {qrBusy && sessionId ? 'Ожидание…' : isBotOnly ? 'Подключить бота (QR)' : 'QR бота (доп.)'}
            </button>
            {!isBotOnly && (
              <button type="button" className="amo-hub__btn" disabled={syncBusy} onClick={syncRecentChats}>
                {syncBusy ? 'Синхронизируем…' : 'Синхронизировать все чаты'}
              </button>
            )}
          </div>
          <div className="amo-hub__row">
            {qrImage && (
              <div className="amo-hub__qr">
                <img src={qrImage} alt="QR для бота" width={180} height={180} />
              </div>
            )}
            {devQrImage && (
              <div className="amo-hub__qr">
                <img src={devQrImage} alt="QR связать устройство Telegram" width={180} height={180} />
              </div>
            )}
            {!devQrImage && devQrData && (
              <div className="amo-hub__qr">
                <p className="amo-hub__muted">
                  QR временно не отрисован. Резервная ссылка: <code>{devQrData}</code>
                </p>
              </div>
            )}
          </div>
          {devPasswordNeeded && (
            <div className="amo-hub__row amo-hub__row--stack">
              <input
                type="password"
                className="amo-hub__input"
                placeholder="Облачный пароль / 2FA"
                value={devPassword}
                onChange={(e) => setDevPassword(e.target.value)}
              />
              <button
                type="button"
                className="amo-hub__btn amo-hub__btn--primary"
                disabled={devPasswordSubmitting || !devPassword.trim()}
                onClick={submitDevicePassword}
              >
                {devPasswordSubmitting ? '…' : 'Отправить пароль'}
              </button>
            </div>
          )}
          {(qrHint || devHint) && <p className="amo-hub__hint">{devHint || qrHint}</p>}
        </section>
      )}

      <div className="amo-hub__workspace">
        <aside className="amo-hub__sidebar">
          <div className="amo-hub__row">
            <input
              className="amo-hub__input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск чатов"
            />
          </div>
          <label className="amo-hub__checkbox">
            <input
              type="checkbox"
              checked={unreadOnly}
              onChange={(e) => setUnreadOnly(e.target.checked)}
            />
            Только непрочитанные
          </label>
          {linkedUsers.length > 0 && (
            <div className="amo-hub__row amo-hub__row--stack">
              <label className="amo-hub__muted">Фильтр по подключенному пользователю</label>
              <select
                className="amo-hub__input"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
              >
                <option value="">Все пользователи</option>
                {linkedUsers.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.title} ({u.channel})
                  </option>
                ))}
              </select>
            </div>
          )}
          {linkedUsers.length > 1 && (
            <div className="amo-hub__multichat-card">
              <div className="amo-hub__multichat-head">
                <strong>Мультичат</strong>
                <button type="button" className="amo-hub__btn" onClick={() => setMultiChatOpen((v) => !v)}>
                  {multiChatOpen ? 'Скрыть' : 'Создать'}
                </button>
              </div>
              {multiChatOpen && (
                <>
                  <div className="amo-hub__multichat-users">
                    {linkedUsers.map((u) => (
                      <label key={u.id} className="amo-hub__checkbox">
                        <input
                          type="checkbox"
                          checked={multiSelectedUsers.includes(u.id)}
                          onChange={() => toggleMultiUser(u.id)}
                        />
                        {u.title}
                      </label>
                    ))}
                  </div>
                  <textarea
                    className="amo-hub__textarea"
                    value={multiText}
                    onChange={(e) => setMultiText(e.target.value)}
                    rows={2}
                    placeholder="Сообщение для выбранных пользователей..."
                  />
                  <div className="amo-hub__row">
                    <label className="amo-hub__btn">
                      Добавить файлы
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleAddMultiAttachments(e.target.files)}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <button
                      type="button"
                      className="amo-hub__btn amo-hub__btn--primary"
                      disabled={multiSendBusy || multiSelectedUsers.length === 0 || (!multiText.trim() && multiAttachments.length === 0)}
                      onClick={sendMultiChatMessage}
                    >
                      {multiSendBusy ? 'Отправляем…' : 'Отправить мультичат'}
                    </button>
                  </div>
                  {multiAttachments.length > 0 && (
                    <div className="amo-hub__attachments">
                      {multiAttachments.map((a, idx) => (
                        <span key={`${a.name}-${idx}`} className="amo-hub__attachment-chip">
                          {a.name}
                        </span>
                      ))}
                      <button type="button" className="amo-hub__btn" onClick={() => setMultiAttachments([])}>
                        Очистить
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          {loadError && <p className="amo-hub__err">{loadError}</p>}
          {!loadError && chats.length === 0 && <p className="amo-hub__muted">Чатов пока нет. Подключите Telegram в настройках каналов.</p>}
          <ul className="amo-hub__chat-list">
            {chats.map((c) => (
              <li
                key={c.id}
                className={`amo-hub__chat-item ${selectedConversationId === c.id ? 'amo-hub__chat-item--active' : ''}`}
                onClick={() => handleSelectConversation(c.id)}
              >
                <span className="amo-hub__chat-avatar" style={{ background: avatarColor(c.id) }}>
                  {avatarLabel(c.title)}
                </span>
                <span className="amo-hub__chat-main">
                  <span className="amo-hub__chat-head">
                    <span className="amo-hub__chat-title">{c.title}</span>
                    <span className="amo-hub__chat-time">{shortTime(c.lastMessageAt || c.updatedAt)}</span>
                  </span>
                  {c.lastMessageText && <span className="amo-hub__chat-preview">{c.lastMessageText}</span>}
                </span>
                {c.unreadCount > 0 && <span className="amo-hub__chat-badge">{c.unreadCount}</span>}
              </li>
            ))}
          </ul>
        </aside>

        <section className="amo-hub__dialog">
          {!selectedConversation && (
            <div className="amo-hub__dialog-empty">
              <p className="amo-hub__muted">Выберите диалог слева, чтобы открыть переписку.</p>
            </div>
          )}
          {selectedConversation && (
            <>
              <div className="amo-hub__dialog-header">
                <div className="amo-hub__dialog-user">
                  <span className="amo-hub__chat-avatar" style={{ background: avatarColor(selectedConversation.id) }}>
                    {avatarLabel(selectedConversation.title)}
                  </span>
                  <div>
                    <strong>{selectedConversation.title}</strong>
                    <div className="amo-hub__muted">{selectedConversation.channel}</div>
                  </div>
                </div>
              </div>
              {messagesLoading && <p className="amo-hub__muted">Загружаем сообщения…</p>}
              {messagesError && <p className="amo-hub__err">{messagesError}</p>}
              <div className="amo-hub__messages">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`amo-hub__msg ${m.direction === 'outgoing' ? 'amo-hub__msg--out' : 'amo-hub__msg--in'}`}
                  >
                    {m.text ? <div className="amo-hub__msg-text">{m.text}</div> : null}
                    {m.mediaType === 'voice' && m.mediaUrl ? (
                      <audio controls preload="none" src={m.mediaUrl} style={{ maxWidth: '100%' }}>
                        Ваш браузер не поддерживает воспроизведение аудио.
                      </audio>
                    ) : null}
                    {m.mediaType === 'video_note' && m.mediaUrl ? (
                      <video
                        controls
                        preload="none"
                        src={m.mediaUrl}
                        style={{ width: 220, maxWidth: '100%', borderRadius: 12 }}
                      />
                    ) : null}
                    <div className="amo-hub__msg-time">
                      {parseDbDate(m.createdAt)?.toLocaleString() || ''}
                      {m.senderName ? ` · ${m.senderName}` : ''}
                      {statusMark(m) ? ` · ${statusMark(m)}` : ''}
                    </div>
                  </div>
                ))}
              </div>
              <div className="amo-hub__composer">
                <div className="amo-hub__composer-row">
                  <label className="amo-hub__composer-icon" title="Добавить файлы">
                    +
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleAddAttachments(e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <textarea
                    className="amo-hub__textarea"
                    value={outgoingText}
                    onChange={(e) => setOutgoingText(e.target.value)}
                    placeholder="Введите сообщение..."
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessageToTelegram();
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="amo-hub__composer-send"
                    onClick={sendMessageToTelegram}
                    disabled={sendBusy || (!outgoingText.trim() && attachments.length === 0)}
                    title="Отправить"
                  >
                    ➤
                  </button>
                </div>
                {attachments.length > 0 && (
                  <div className="amo-hub__attachments">
                    {attachments.map((a, idx) => (
                      <span key={`${a.name}-${idx}`} className="amo-hub__attachment-chip">
                        {a.name}
                      </span>
                    ))}
                    <button type="button" className="amo-hub__btn" onClick={() => setAttachments([])}>
                      Очистить
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
