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

  const [devSessionId, setDevSessionId] = useState(null);
  const [devQrImage, setDevQrImage] = useState(null);
  const [devHint, setDevHint] = useState('');
  const [devBusy, setDevBusy] = useState(false);
  const [devPasswordNeeded, setDevPasswordNeeded] = useState(false);
  const [devPassword, setDevPassword] = useState('');
  const [devPasswordSubmitting, setDevPasswordSubmitting] = useState(false);

  useEffect(() => {
    if (qpSubdomain) setSubdomain(qpSubdomain);
  }, [qpSubdomain]);

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
      const r = await fetch(`/api/telegram/conversations?subdomain=${encodeURIComponent(s)}&limit=5`);
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
  }, [subdomain]);

  useEffect(() => {
    refreshAmoStatus();
  }, [refreshAmoStatus]);

  useEffect(() => {
    refreshChats();
  }, [refreshChats]);

  useEffect(() => {
    if (!sessionId) return undefined;
    const t = setInterval(async () => {
      try {
        const r = await fetch(`/api/auth/telegram/qr/${sessionId}`);
        if (!r.ok) return;
        const j = await r.json();
        if (j.status === 'authorized') {
          setQrHint('Telegram (бот) подключён ✅ Обновляем список…');
          setQrImage(null);
          setSessionId(null);
          setQrBusy(false);
          refreshChats();
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
  }, [sessionId, refreshChats]);

  useEffect(() => {
    if (!devSessionId) return undefined;
    const t = setInterval(async () => {
      try {
        const r = await fetch(`/api/auth/telegram/device/${devSessionId}`);
        if (!r.ok) return;
        const j = await r.json();
        if (j.qrImage) setDevQrImage(j.qrImage);
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
          setDevSessionId(null);
          setDevBusy(false);
          setDevPasswordNeeded(false);
          refreshChats();
        }
        if (j.status === 'error') {
          setDevHint(j.error || 'Ошибка авторизации');
          setDevQrImage(null);
          setDevBusy(false);
          setDevPasswordNeeded(false);
          setDevSessionId(null);
        }
        if (j.status === 'starting') {
          setDevHint('Подключаемся к Telegram…');
        }
      } catch {
        /* ignore */
      }
    }, 2000);
    return () => clearInterval(t);
  }, [devSessionId, devPasswordNeeded, refreshChats]);

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
      setDevHint('Подключение… через пару секунд появится QR.');
    } catch (e) {
      setDevHint(e.message || 'Ошибка. Задайте на сервере TELEGRAM_API_ID и TELEGRAM_API_HASH (my.telegram.org).');
      setDevBusy(false);
    }
  };

  const submitDevicePassword = async () => {
    if (!devSessionId || !devPassword.trim()) return;
    setDevPasswordSubmitting(true);
    try {
      await fetch(`/api/auth/telegram/device/${devSessionId}/password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: devPassword }),
      });
      setDevPasswordNeeded(false);
      setDevPassword('');
      setDevHint('Проверка пароля…');
    } catch {
      setDevHint('Не удалось отправить пароль');
    } finally {
      setDevPasswordSubmitting(false);
    }
  };

  const sNorm = subdomain.trim().toLowerCase();
  const oauthHref = sNorm ? `/oauth?subdomain=${encodeURIComponent(sNorm)}` : '/oauth';

  return (
    <div className={`amo-hub ${embedded ? 'amo-hub--embedded' : ''}`}>
      {!embedded && <h1 className="amo-hub__title">Corsa · Telegram и amoCRM</h1>}
      <p className="amo-hub__lead">
        Два способа: <strong>бот</strong> (QR со ссылкой на бота) или <strong>связанные устройства</strong> (официальный QR аккаунта Telegram).
        Для записей в amoCRM нужен OAuth и привязка чата к сделке/контакту.
      </p>

      <section className="amo-hub__card">
        <h2>Поддомен amoCRM</h2>
        <p className="amo-hub__muted">Только имя аккаунта: для <code>mycompany.amocrm.ru</code> введите <code>mycompany</code></p>
        <div className="amo-hub__row">
          <input
            className="amo-hub__input"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            placeholder="mycompany"
          />
          <button type="button" className="amo-hub__btn" onClick={() => { refreshAmoStatus(); refreshChats(); }}>
            Обновить
          </button>
        </div>
      </section>

      <section className="amo-hub__card">
        <h2>1. Доступ к API amoCRM</h2>
        {amoAuthorized === null && <p className="amo-hub__muted">Проверяем…</p>}
        {amoAuthorized === true && <p className="amo-hub__ok">OAuth активен — можно синхронизировать сообщения в карточки.</p>}
        {amoAuthorized === false && (
          <p className="amo-hub__warn">
            Интеграция с API amoCRM не авторизована. Нажмите и разрешите доступ в новом окне, затем вернитесь сюда и нажмите «Обновить».
          </p>
        )}
        {sNorm ? (
          <a className="amo-hub__btn amo-hub__btn--primary" href={oauthHref} target="_blank" rel="noreferrer">
            Подключить amoCRM (OAuth)
          </a>
        ) : (
          <p className="amo-hub__muted">Укажите поддомен выше, затем откройте OAuth.</p>
        )}
      </section>

      <section className="amo-hub__card">
        <h2>2. Telegram через бота (QR)</h2>
        <p className="amo-hub__muted">
          На сервере: <code>TELEGRAM_TOKEN</code> и <code>TELEGRAM_BOT_USERNAME</code> (без @).
        </p>
        <button type="button" className="amo-hub__btn amo-hub__btn--primary" disabled={qrBusy} onClick={startQr}>
          {qrBusy && sessionId ? 'Ожидание…' : 'QR для бота'}
        </button>
        {qrImage && (
          <div className="amo-hub__qr">
            <img src={qrImage} alt="QR для бота" width={220} height={220} />
          </div>
        )}
        {qrHint && <p className="amo-hub__hint">{qrHint}</p>}
      </section>

      <section className="amo-hub__card amo-hub__card--accent">
        <h2>3. Telegram «Связанные устройства» (MTProto)</h2>
        <p className="amo-hub__muted">
          Официальный сценарий: QR с префиксом <code>tg://login</code>. В приложении Telegram:{' '}
          <strong>Настройки → Устройства → Связать устройство</strong> → наведите камеру на QR с экрана.
          На сервере нужны <code>TELEGRAM_API_ID</code> и <code>TELEGRAM_API_HASH</code> с{' '}
          <a href="https://my.telegram.org" target="_blank" rel="noreferrer">my.telegram.org</a>.
        </p>
        <button type="button" className="amo-hub__btn amo-hub__btn--primary" disabled={devBusy} onClick={startDeviceQr}>
          {devBusy && devSessionId ? 'Ожидание сканирования…' : 'Показать QR (связать устройство)'}
        </button>
        {devQrImage && (
          <div className="amo-hub__qr">
            <img src={devQrImage} alt="QR связать устройство Telegram" width={220} height={220} />
          </div>
        )}
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
        {devHint && <p className="amo-hub__hint">{devHint}</p>}
      </section>

      <section className="amo-hub__card">
        <h2>Недавние диалоги (до 5)</h2>
        <p className="amo-hub__muted">
          После режима «Связанные устройства» подтягиваются последние диалоги из вашего аккаунта в список связей Corsa.
          Входящие сообщения уходят в amoCRM как примечание, если чат привязан к карточке.
        </p>
        {loadError && <p className="amo-hub__err">{loadError}</p>}
        {!loadError && chats.length === 0 && <p className="amo-hub__muted">Пока пусто — выполните один из шагов с QR.</p>}
        <ul className="amo-hub__chat-list">
          {chats.map((c) => (
            <li key={c.id} className="amo-hub__chat-item">
              <span className="amo-hub__chat-title">{c.title}</span>
              <span className="amo-hub__chat-meta">
                {c.channel}
                {c.amoLeadId ? ` · сделка #${c.amoLeadId}` : ''}
                {c.amoContactId ? ` · контакт #${c.amoContactId}` : ''}
                {!c.amoLeadId && !c.amoContactId ? ' · не привязано к карточке' : ''}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
