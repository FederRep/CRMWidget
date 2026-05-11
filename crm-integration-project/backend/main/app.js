// Загружаем переменные окружения
require('dotenv').config();

const express = require('express');
const path = require('path');
const axios = require('axios');
const EventEmitter = require('events');
const winston = require('winston');
const db = require('./database');
const telegramDeviceAuth = require('./telegramDeviceAuth');
const cors = require('cors');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

global.telegramQrSessionSubdomains = global.telegramQrSessionSubdomains || new Map();

/* ============================================================
   📡 PLATFORM ROUTES
============================================================ */
const instagramRoutes = require('../adapters/instagram/instagram.routes');
const avitoRoutes = require('../adapters/avito/avito.routes');
const linkedinRoutes = require('../adapters/linkedin/linkedin.routes');

app.use('/api/instagram', instagramRoutes);
app.use('/api/avito', avitoRoutes);
app.use('/api/linkedin', linkedinRoutes);

/* ============================================================
   🌐 STATIC FILES (Frontend)
============================================================ */
// В production раздаём собранный frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
}

const eventBus = new EventEmitter();

/* ============================================================
   LOGGER
============================================================ */
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()]
});

telegramDeviceAuth.setLogger(logger);

/* ============================================================
   BASE ROUTE
============================================================ */
// Корневой маршрут - отдаём index.html в production
app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    return res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  }
  res.send('Telegram ↔ amoCRM integration is running 🚀');
});

/* ============================================================
   ✅ TEST ENDPOINT
============================================================ */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend works 🚀' });
});

/* ============================================================
   👤 USER REGISTRATION & AUTH (SaaS model)
============================================================ */

// Регистрация нового пользователя
app.post('/api/auth/register', async (req, res) => {
  const { email, password, amo_subdomain } = req.body;
  
  if (!email || !password || !amo_subdomain) {
    return res.status(400).json({ error: 'email, password и amo_subdomain обязательны' });
  }
  
  db.get('SELECT id FROM users_accounts WHERE email = ?', [email], async (err, row) => {
    if (row) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const trialEndsAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    
    db.run(
      `INSERT INTO users_accounts (email, password_hash, amo_subdomain, trial_ends_at, subscription_status)
       VALUES (?, ?, ?, ?, 'trial')`,
      [email, passwordHash, amo_subdomain, trialEndsAt],
      function(err) {
        if (err) {
          logger.error('Registration failed', err);
          return res.status(500).json({ error: 'Ошибка при регистрации' });
        }
        
        const userId = this.lastID;
        const token = jwt.sign(
          { userId, email, amo_subdomain },
          process.env.JWT_SECRET || 'your-secret-key-change-in-production',
          { expiresIn: '30d' }
        );
        
        logger.info('User registered', { userId, email, amo_subdomain });
        
        res.json({
          success: true,
          user: {
            id: userId,
            email,
            amo_subdomain,
            trialEndsAt: trialEndsAt.toISOString(),
            subscriptionStatus: 'trial'
          },
          token
        });
      }
    );
  });
});

// Логин пользователя
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'email и пароль обязательны' });
  }
  
  db.get('SELECT * FROM users_accounts WHERE email = ?', [email], async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Неверный email или пароль' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Неверный email или пароль' });
    }
    
    const token = jwt.sign(
      { userId: user.id, email: user.email, amo_subdomain: user.amo_subdomain },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '30d' }
    );
    
    const now = new Date();
    let status = user.subscription_status;
    
    if (status === 'trial' && new Date(user.trial_ends_at) < now) {
      status = 'expired';
      db.run('UPDATE users_accounts SET subscription_status = ? WHERE id = ?', ['expired', user.id]);
    }
    
    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        amo_subdomain: user.amo_subdomain,
        trialEndsAt: user.trial_ends_at,
        subscriptionStatus: status,
        subscriptionPlan: user.subscription_plan,
        subscriptionEndsAt: user.subscription_ends_at
      },
      token
    });
  });
});

// Получение данных текущего пользователя
app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Требуется авторизация' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production');
    
    db.get('SELECT * FROM users_accounts WHERE id = ?', [decoded.userId], (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }

      res.json({
        id: user.id,
        email: user.email,
        amo_subdomain: user.amo_subdomain,
        trialEndsAt: user.trial_ends_at,
        subscriptionStatus: user.subscription_status,
        subscriptionPlan: user.subscription_plan,
        subscriptionEndsAt: user.subscription_ends_at
      });
    });
  } catch (error) {
    res.status(401).json({ error: 'Недействительный токен' });
  }
});

// Получение данных текущего пользователя (старый endpoint для совместимости)
app.get('/api/user/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Требуется авторизация' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production');
    
    db.get('SELECT * FROM users_accounts WHERE id = ?', [decoded.userId], (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }
      
      res.json({
        id: user.id,
        email: user.email,
        amo_subdomain: user.amo_subdomain,
        trialEndsAt: user.trial_ends_at,
        subscriptionStatus: user.subscription_status,
        subscriptionPlan: user.subscription_plan,
        subscriptionEndsAt: user.subscription_ends_at,
        createdAt: user.created_at
      });
    });
  } catch (err) {
    return res.status(401).json({ error: 'Неверный токен' });
  }
});

// Проверка статуса подписки (для виджета в amoCRM)
app.get('/api/subscription/status', (req, res) => {
  const subdomain = req.query.subdomain;
  
  if (!subdomain) {
    return res.status(400).json({ error: 'subdomain required' });
  }
  
  db.get(
    'SELECT * FROM users_accounts WHERE amo_subdomain = ?',
    [subdomain],
    (err, user) => {
      if (err || !user) {
        return res.json({ 
          active: false, 
          status: 'not_registered',
          message: 'Зарегистрируйтесь на corsa-crm.ru для активации',
          registrationUrl: 'https://corsa-crm.ru/register'
        });
      }
      
      const now = new Date();
      let status = user.subscription_status;
      let daysLeft = 0;
      
      if (status === 'trial') {
        const trialEnd = new Date(user.trial_ends_at);
        daysLeft = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
        
        if (trialEnd < now) {
          status = 'expired';
          db.run('UPDATE users_accounts SET subscription_status = ? WHERE id = ?', ['expired', user.id]);
        }
      } else if (status === 'active' && user.subscription_ends_at) {
        const subEnd = new Date(user.subscription_ends_at);
        daysLeft = Math.ceil((subEnd - now) / (1000 * 60 * 60 * 24));
        
        if (subEnd < now) {
          status = 'expired';
        }
      }
      
      res.json({
        active: status === 'trial' || status === 'active',
        status,
        plan: user.subscription_plan,
        daysLeft,
        trialEndsAt: user.trial_ends_at,
        subscriptionEndsAt: user.subscription_ends_at,
        registrationUrl: 'https://corsa-crm.ru/register'
      });
    }
  );
});

// Тарифы (для отображения на фронтенде)
app.get('/api/plans', (req, res) => {
  res.json({
    plans: [
      {
        id: 'start',
        name: 'Старт',
        price: 490,
        period: 'month',
        features: [
          'До 1000 сообщений в месяц',
          '1 пользователь',
          'Telegram интеграция',
          'Базовая поддержка'
        ],
        popular: false
      },
      {
        id: 'business',
        name: 'Бизнес',
        price: 990,
        period: 'month',
        features: [
          'До 5000 сообщений в месяц',
          'До 5 пользователей',
          'Telegram + VK интеграция',
          'Приоритетная поддержка',
          'Вебхуки для событий'
        ],
        popular: true
      },
      {
        id: 'pro',
        name: 'Профессиональный',
        price: 1990,
        period: 'month',
        features: [
          'Безлимитные сообщения',
          'Безлимитные пользователи',
          'Все мессенджеры',
          'Персональный менеджер',
          'API доступ',
          'Кастомные интеграции'
        ],
        popular: false
      }
    ]
  });
});

/* ============================================================
   🔐 ОБЩИЕ ENDPOINTS СТАТУСА И ЛОГАУТА
============================================================ */

// Статус amoCRM
app.get('/api/auth/status', (req, res) => {
  const subdomain = req.query.subdomain;
  if (!subdomain) return res.json({ authorized: false, error: 'No subdomain' });
  
  db.get(
    'SELECT access_token, expires_at FROM users WHERE amo_subdomain = ?',
    [subdomain],
    (err, row) => {
      if (err || !row) return res.json({ authorized: false });
      const isExpired = row.expires_at < Math.floor(Date.now() / 1000);
      res.json({ 
        authorized: !isExpired,
        subdomain,
        expiresAt: row.expires_at
      });
    }
  );
});

// Логаут amoCRM
app.post('/api/auth/logout', (req, res) => {
  const { subdomain } = req.body;
  if (!subdomain) return res.json({ success: false, error: 'No subdomain' });
  
  db.run('DELETE FROM users WHERE amo_subdomain = ?', [subdomain], (err) => {
    if (err) return res.json({ success: false, error: err.message });
    logger.info(`Logged out amoCRM: ${subdomain}`);
    res.json({ success: true });
  });
});

// Статус VK
app.get('/api/vk/status', (req, res) => {
  db.get(
    'SELECT access_token, expires_at FROM vk_users WHERE vk_user_id = ?',
    ['current_user'],
    (err, row) => {
      if (err || !row) return res.json({ connected: false });
      const isExpired = row.expires_at && row.expires_at < Math.floor(Date.now() / 1000);
      res.json({ connected: !isExpired });
    }
  );
});

// Логаут VK
app.post('/api/vk/logout', (req, res) => {
  db.run('DELETE FROM vk_users WHERE vk_user_id = ?', ['current_user'], (err) => {
    if (err) return res.json({ success: false, error: err.message });
    logger.info('Logged out VK');
    res.json({ success: true });
  });
});

// Статус Telegram
app.get('/api/telegram/status', (req, res) => {
  db.get(
    'SELECT telegram_chat_id FROM conversations WHERE telegram_chat_id IS NOT NULL LIMIT 1',
    [],
    (err, row) => {
      res.json({ connected: !!row });
    }
  );
});

// Логаут Telegram
app.post('/api/telegram/logout', (req, res) => {
  db.run('DELETE FROM conversations WHERE telegram_chat_id IS NOT NULL', (err) => {
    if (err) return res.json({ success: false, error: err.message });
    logger.info('Logged out Telegram');
    res.json({ success: true });
  });
});

// Статус LinkedIn
app.get('/api/linkedin/status', (req, res) => {
  db.get(
    'SELECT access_token, expires_at FROM linkedin_users WHERE linkedin_id = ?',
    ['current_user'],
    (err, row) => {
      if (err || !row) return res.json({ connected: false });
      const isExpired = row.expires_at < Math.floor(Date.now() / 1000);
      res.json({ connected: !isExpired });
    }
  );
});

// Логаут LinkedIn
app.post('/api/linkedin/logout', (req, res) => {
  db.run('DELETE FROM linkedin_users WHERE linkedin_id = ?', ['current_user'], (err) => {
    if (err) return res.json({ success: false, error: err.message });
    logger.info('Logged out LinkedIn');
    res.json({ success: true });
  });
});

/* ============================================================
   🦀 AMOCRM OAUTH
============================================================ */

function parseSubdomainFromReferer(referer) {
  if (!referer) return null;

  try {
    const normalized = referer.startsWith('http') ? referer : `https://${referer}`;
    const parsed = new URL(normalized);
    const host = parsed.hostname || '';

    if (!host.endsWith('.amocrm.ru')) return null;

    return host.replace('.amocrm.ru', '');
  } catch (err) {
    return null;
  }
}

function storeOAuthState(state, subdomain) {
  global.oauthStates = global.oauthStates || {};
  global.oauthStates[state] = { subdomain, ts: Date.now() };
}

function resolveSubdomainByStateOrReferer(state, referer) {
  let subdomain = null;

  if (state && global.oauthStates && global.oauthStates[state]) {
    subdomain = global.oauthStates[state].subdomain;
    delete global.oauthStates[state];
    return subdomain;
  }

  if (state) {
    try {
      const stateData = JSON.parse(Buffer.from(state, 'base64').toString());
      if (stateData?.subdomain) return stateData.subdomain;
    } catch (e) {
      // fallback on referer below
    }
  }

  return parseSubdomainFromReferer(referer);
}

async function exchangeAmoCodeForTokens(subdomain, code) {
  const tokenUrl = `https://${subdomain}.amocrm.ru/oauth2/access_token`;

  const response = await axios.post(tokenUrl, {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.REDIRECT_URI
  });

  const { access_token, refresh_token, expires_in } = response.data;
  const expiresAt = Math.floor(Date.now() / 1000) + expires_in;

  await new Promise((resolve, reject) => {
    db.run(
      `INSERT OR REPLACE INTO users 
      (amo_subdomain, access_token, refresh_token, expires_at) 
      VALUES (?, ?, ?, ?)`,
      [subdomain, access_token, refresh_token, expiresAt],
      err => (err ? reject(err) : resolve())
    );
  });

  return { access_token, refresh_token, expires_in, expires_at: expiresAt };
}

async function handleAmoOAuthCallback(req, res) {
  const { code, state, referer } = req.query;

  if (!code) return res.status(400).send('No code');

  const subdomain = resolveSubdomainByStateOrReferer(state, referer);
  if (!subdomain) {
    logger.error('Failed to resolve subdomain in OAuth callback', { state, referer });
    return res.status(400).send('No subdomain resolved');
  }

  try {
    await exchangeAmoCodeForTokens(subdomain, code);
    logger.info(`OAuth success for ${subdomain}`);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>Authorization Success</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:40px;">
        <h2>Authorization successful ✅</h2>
        <p>Tokens stored. You can close this window.</p>
        <script>
          if (window.opener && !window.opener.closed) {
            window.opener.postMessage({ type: 'AMO_OAUTH_SUCCESS' }, '*');
          }
          setTimeout(() => window.close(), 1200);
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    logger.error('OAuth exchange failed', {
      error: err.response?.data || err.message,
      subdomain
    });
    res.status(500).send('OAuth failed');
  }
}

// Старт авторизации (редирект на amoCRM)
// OAuth для виджета (mode=post_message - современный способ)
app.get('/oauth', (req, res) => {
  const subdomain =
    req.query.subdomain ||
    parseSubdomainFromReferer(req.query.referer) ||
    process.env.AMOCRM_SUBDOMAIN;

  if (!subdomain) return res.status(400).send('No subdomain provided');

  // Генерируем state и запоминаем связь state -> subdomain
  const state = Math.random().toString(36).substring(2, 15);
  storeOAuthState(state, subdomain);

  // Для совместимости поддерживаем оба режима
  const mode = req.query.mode || 'post_message';

  const url = `https://${subdomain}.amocrm.ru/oauth` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}` +
    `&response_type=code` +
    `&mode=${mode}` +
    `&state=${state}`;

  logger.info('Redirecting to amoCRM OAuth', { redirect_uri: process.env.REDIRECT_URI, subdomain });

  if (req.query.return_url === '1') {
    return res.json({ ok: true, oauth_url: url, subdomain, state, mode });
  }

  res.redirect(url);
});

/* ============================================================
   OAUTH CALLBACK
============================================================ */

// Callback для OAuth (для совместимости с виджетом)
app.get('/api/auth/callback', async (req, res) => {
  return handleAmoOAuthCallback(req, res);
});

// Старый callback (для обратной совместимости)
app.get('/callback', async (req, res) => {
  return handleAmoOAuthCallback(req, res);
});

// Ручной обмен code -> tokens (когда код получен отдельно)
app.post('/api/auth/exchange-code', async (req, res) => {
  const { code, subdomain, referer } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'code required' });
  }

  const resolvedSubdomain = subdomain || parseSubdomainFromReferer(referer);
  if (!resolvedSubdomain) {
    return res.status(400).json({ error: 'subdomain or referer required' });
  }

  try {
    const tokens = await exchangeAmoCodeForTokens(resolvedSubdomain, code);
    res.json({
      success: true,
      subdomain: resolvedSubdomain,
      expiresAt: tokens.expires_at
    });
  } catch (error) {
    logger.error('Manual code exchange failed', {
      error: error.response?.data || error.message,
      subdomain: resolvedSubdomain
    });
    res.status(500).json({ error: 'OAuth exchange failed' });
  }
});

/* ============================================================
   🔄 REFRESH TOKEN
============================================================ */

// Обновление access_token через refresh_token
async function refreshAmoToken(subdomain) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT refresh_token FROM users WHERE amo_subdomain = ?',
      [subdomain],
      async (err, row) => {
        if (err || !row) {
          return reject(new Error('No refresh token found'));
        }

        try {
          const tokenUrl = `https://${subdomain}.amocrm.ru/oauth2/access_token`;
          
          const response = await axios.post(tokenUrl, {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: row.refresh_token,
            redirect_uri: process.env.REDIRECT_URI
          });

          const { access_token, refresh_token, expires_in } = response.data;
          const expiresAt = Math.floor(Date.now() / 1000) + expires_in;

          // Обновляем токены в БД
          db.run(
            `UPDATE users SET access_token = ?, refresh_token = ?, expires_at = ? WHERE amo_subdomain = ?`,
            [access_token, refresh_token, expiresAt, subdomain],
            (err) => {
              if (err) {
                logger.error('Failed to update tokens', err);
                return reject(err);
              }
              logger.info(`Token refreshed for ${subdomain}`);
              resolve({ access_token, refresh_token, expiresAt });
            }
          );
        } catch (error) {
          logger.error('Token refresh failed', error.response?.data || error.message);
          reject(error);
        }
      }
    );
  });
}

// API endpoint для ручного обновления токена
app.post('/api/auth/refresh', async (req, res) => {
  const { subdomain } = req.body;
  
  if (!subdomain) {
    return res.status(400).json({ error: 'subdomain required' });
  }

  try {
    const tokens = await refreshAmoToken(subdomain);
    res.json({ success: true, tokens });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware для автоматического обновления токена
async function getValidAccessToken(subdomain) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT access_token, refresh_token, expires_at FROM users WHERE amo_subdomain = ?',
      [subdomain],
      async (err, row) => {
        if (err || !row) {
          return reject(new Error('User not found'));
        }

        const now = Math.floor(Date.now() / 1000);
        const expiresIn = row.expires_at - now;

        // Если токен истекает через менее чем 5 минут - обновляем
        if (expiresIn < 300) {
          try {
            const tokens = await refreshAmoToken(subdomain);
            resolve(tokens.access_token);
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(row.access_token);
        }
      }
    );
  });
}

/* ============================================================
   ✈️ TELEGRAM QR AUTH (Wazzup-style)
============================================================ */

// 1. Создание сессии и генерация QR-кода (GET и POST; subdomain привязывает чаты к аккаунту amo)
function createTelegramAccountQrSession(req, res) {
  const sessionId = crypto.randomBytes(16).toString('hex');
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const rawSubdomain =
    (req.query && req.query.subdomain) ||
    (req.body && typeof req.body === 'object' && req.body.subdomain) ||
    '';
  const normalizedSubdomain = normalizeAmoSubdomain(rawSubdomain);

  db.run(
    `INSERT INTO auth_sessions (session_id, platform, status, expires_at) 
     VALUES (?, 'telegram', 'pending', ?)`,
    [sessionId, expiresAt],
    (err) => {
      if (err) {
        logger.error('Failed to create session', err);
        return res.status(500).json({ error: 'Failed to create session' });
      }

      if (normalizedSubdomain) {
        global.telegramQrSessionSubdomains.set(sessionId, normalizedSubdomain);
        setTimeout(() => global.telegramQrSessionSubdomains.delete(sessionId), 6 * 60 * 1000);
      }

      const botUsername = String(process.env.TELEGRAM_BOT_USERNAME || '')
        .replace(/^@/, '')
        .trim();
      if (!botUsername) {
        logger.warn('TELEGRAM_BOT_USERNAME is empty — set it in .env to the bot name from @BotFather');
      }
      const deepLink = `https://t.me/${botUsername || 'your_bot_name'}?start=auth_${sessionId}`;

      logger.info('Telegram QR session created', { sessionId, subdomain: normalizedSubdomain });

      res.json({
        sessionId,
        qrData: deepLink,
        qrImage: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(deepLink)}`,
        expiresAt: expiresAt.toISOString()
      });
    }
  );
}

app.get('/api/auth/telegram/qr', createTelegramAccountQrSession);
app.post('/api/auth/telegram/qr', createTelegramAccountQrSession);

// 1.1 Telegram Business QR-сессия (для подключения из ЛК Corsa)
app.get('/api/auth/telegram/business/qr', (req, res) => {
  const sessionId = crypto.randomBytes(16).toString('hex');
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const subdomain = normalizeAmoSubdomain(req.query.subdomain) || null;

  db.run(
    `INSERT INTO auth_sessions (session_id, platform, status, expires_at) 
     VALUES (?, 'telegram_business', 'pending', ?)`,
    [sessionId, expiresAt],
    (err) => {
      if (err) {
        logger.error('Failed to create Telegram Business session', err);
        return res.status(500).json({ error: 'Failed to create session' });
      }

      const botUsername = String(process.env.TELEGRAM_BOT_USERNAME || '')
        .replace(/^@/, '')
        .trim() || 'your_bot_name';
      const deepLink = `https://t.me/${botUsername}?start=biz_${sessionId}`;

      // Если subdomain передан, заранее связываем с бизнес-подключением
      if (subdomain) {
        db.run(
          `INSERT OR REPLACE INTO telegram_business_connections
           (business_connection_id, amo_subdomain, is_enabled, updated_at)
           VALUES (?, ?, 1, CURRENT_TIMESTAMP)`,
          [`pending_${sessionId}`, subdomain]
        );
      }

      res.json({
        sessionId,
        qrData: deepLink,
        qrImage: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(deepLink)}`,
        expiresAt: expiresAt.toISOString()
      });
    }
  );
});

// 2. Проверка статуса сессии (polling)
app.get('/api/auth/telegram/qr/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  
  db.get(
    `SELECT status, telegram_id, telegram_username, error, expires_at 
     FROM auth_sessions 
     WHERE session_id = ?`,
    [sessionId],
    (err, row) => {
      if (err || !row) {
        return res.status(404).json({ error: 'Session not found' });
      }
      
      const isExpired = new Date(row.expires_at) < new Date();
      if (isExpired && row.status === 'pending') {
        db.run('UPDATE auth_sessions SET status = ? WHERE session_id = ?', ['expired', sessionId]);
        return res.json({ status: 'expired', error: 'Session expired' });
      }
      
      res.json({
        status: row.status,
        telegramId: row.telegram_id,
        telegramUsername: row.telegram_username,
        error: row.error
      });
    }
  );
});

// 2.1 Страница подключения Telegram (для widget iframe popup)
app.get('/connect-telegram', (req, res) => {
  const leadId = req.query.leadId || '';
  const entityType = req.query.entityType || 'LEAD';
  const subdomain = normalizeAmoSubdomain(req.query.subdomain);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Connect Telegram</title>
      <style>
        body { font-family: system-ui, sans-serif; padding: 24px; text-align: center; }
        .box { max-width: 420px; margin: 0 auto; }
        .muted { color: #666; font-size: 14px; }
        img { border: 1px solid #eee; border-radius: 8px; margin: 12px 0; }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Подключение Telegram</h2>
        <p class="muted">Сканируйте QR в Telegram и нажмите Start у бота.</p>
        <img id="qr" width="250" height="250" alt="Telegram QR" />
        <p id="status" class="muted">Создание сессии...</p>
      </div>
      <script>
        const leadId = ${JSON.stringify(leadId)};
        const entityType = ${JSON.stringify(entityType)};
        const subdomain = ${JSON.stringify(subdomain)};
        const statusEl = document.getElementById('status');
        const qrEl = document.getElementById('qr');

        async function run() {
          const init = await fetch('/api/auth/telegram/qr');
          const initData = await init.json();
          qrEl.src = initData.qrImage;

          const poll = setInterval(async () => {
            const stateRes = await fetch('/api/auth/telegram/qr/' + initData.sessionId);
            const state = await stateRes.json();

            if (state.status === 'authorized' && state.telegramId) {
              statusEl.textContent = 'Telegram подключён, привязываю к карточке...';
              clearInterval(poll);

              const linkRes = await fetch('/link-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chatId: state.telegramId,
                  leadId,
                  entityType,
                  subdomain
                })
              });
              const link = await linkRes.json();

              if (link.success) {
                statusEl.textContent = 'Готово! Чат привязан ✅';
                if (window.opener && !window.opener.closed) {
                  window.opener.postMessage({ type: 'TELEGRAM_SUCCESS' }, '*');
                }
                setTimeout(() => window.close(), 1200);
              } else {
                statusEl.textContent = 'Ошибка привязки: ' + (link.error || 'unknown');
              }
            } else if (state.status === 'expired') {
              clearInterval(poll);
              statusEl.textContent = 'Сессия истекла. Закройте окно и попробуйте снова.';
            } else if (state.status === 'pending') {
              statusEl.textContent = 'Ожидание подтверждения в Telegram...';
            } else if (state.error) {
              statusEl.textContent = state.error;
            }
          }, 2500);
        }

        run().catch((err) => {
          statusEl.textContent = 'Ошибка инициализации';
          console.error(err);
        });
      </script>
    </body>
    </html>
  `);
});

// 3. Получение данных подключенного пользователя
app.get('/api/auth/telegram/me', (req, res) => {
  const { telegramId } = req.query;
  
  if (!telegramId) {
    return res.status(400).json({ error: 'telegramId required' });
  }
  
  db.get(
    `SELECT telegram_id, telegram_username, telegram_first_name, created_at 
     FROM auth_sessions 
     WHERE telegram_id = ? AND status = 'authorized'`,
    [telegramId],
    (err, row) => {
      if (err || !row) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json({
        telegramId: row.telegram_id,
        username: row.telegram_username,
        firstName: row.telegram_first_name,
        connectedAt: row.created_at
      });
    }
  );
});

// 3.1 Webhook Telegram: принимает /start auth_<sessionId> и завершает QR-сессию
app.post('/api/telegram/webhook', (req, res) => {
  const update = req.body || {};
  const message = update.business_message || update.message;
  const businessConnection = update.business_connection || null;

  if (businessConnection?.id) {
    const hintedSubdomain =
      normalizeAmoSubdomain(req.body?.subdomain) ||
      normalizeAmoSubdomain(req.query?.subdomain) ||
      null;

    db.run(
      `INSERT OR REPLACE INTO telegram_business_connections
      (business_connection_id, amo_subdomain, user_chat_id, user_username, user_first_name, is_enabled, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [
        businessConnection.id,
        hintedSubdomain,
        businessConnection.user?.id ? String(businessConnection.user.id) : null,
        businessConnection.user?.username || null,
        businessConnection.user?.first_name || null,
        businessConnection.is_enabled ? 1 : 0
      ]
    );
  }

  if (!message) return res.sendStatus(200);

  const chatId = String(message.chat?.id || message.from?.id || '');
  if (!chatId) return res.sendStatus(200);

  const text = (message.text || message.caption || '').trim();
  const username = message.from?.username || null;
  const firstName = message.from?.first_name || null;
  const telegramUserId = String(message.from?.id || message.chat?.id || '');
  const businessConnectionId = message.business_connection_id || businessConnection?.id || null;
  const channel = businessConnectionId ? 'telegram_business' : 'telegram';

  const isBotQrStart = text.startsWith('/start auth_');
  const isBusinessQrStart = text.startsWith('/start biz_');

  if (isBotQrStart || isBusinessQrStart) {
    const sessionId = isBotQrStart
      ? text.replace('/start auth_', '').trim()
      : text.replace('/start biz_', '').trim();

    db.get(
      `SELECT session_id, status, expires_at FROM auth_sessions WHERE session_id = ?`,
      [sessionId],
      (err, session) => {
        if (err || !session) return res.sendStatus(200);

        const isExpired = new Date(session.expires_at) < new Date();
        if (isExpired || session.status !== 'pending') return res.sendStatus(200);

        const sessionPlatform = isBusinessQrStart ? 'telegram_business' : 'telegram';

        db.run(
          `UPDATE auth_sessions 
           SET status = 'authorized', telegram_id = ?, telegram_username = ?, telegram_first_name = ?, error = NULL
           WHERE session_id = ?`,
          [chatId, username, firstName, sessionId],
          (uErr) => {
            if (uErr) logger.error('auth_sessions update failed', uErr);

            db.run(
              `INSERT OR IGNORE INTO conversations (telegram_chat_id, telegram_user_id, business_connection_id, channel)
               VALUES (?, ?, ?, ?)`,
              [chatId, telegramUserId, businessConnectionId, businessConnectionId ? 'telegram_business' : sessionPlatform],
              (iErr) => {
                if (iErr) logger.error('conversation insert failed', iErr);

                const mappedSub = global.telegramQrSessionSubdomains?.get(sessionId);
                const ns = normalizeAmoSubdomain(mappedSub);
                if (ns) {
                  db.run(
                    `UPDATE conversations SET amo_subdomain = ? WHERE telegram_chat_id = ?`,
                    [ns, chatId],
                    () => {
                      global.telegramQrSessionSubdomains.delete(sessionId);
                      logger.info('Telegram QR session authorized', { sessionId, chatId, amo_subdomain: ns });
                    }
                  );
                } else {
                  if (mappedSub !== undefined) global.telegramQrSessionSubdomains.delete(sessionId);
                  logger.info('Telegram QR session authorized', { sessionId, chatId, businessConnectionId });
                }
              }
            );
          }
        );
      }
    );
  }

  if (!text || isBotQrStart || isBusinessQrStart) return res.sendStatus(200);

  db.get(
    `SELECT * FROM conversations
     WHERE (business_connection_id = ? AND telegram_user_id = ?)
        OR telegram_chat_id = ?
     LIMIT 1`,
    [businessConnectionId, telegramUserId, chatId],
    async (err, conversation) => {
      if (err) return;

      // Для Telegram Business создаем "ожидающий" диалог даже до ручной привязки карточки
      if (!conversation && businessConnectionId) {
        db.run(
          `INSERT OR IGNORE INTO conversations (telegram_chat_id, telegram_user_id, business_connection_id, channel)
           VALUES (?, ?, ?, 'telegram_business')`,
          [chatId, telegramUserId, businessConnectionId]
        );
      }

      if (!conversation) return;

      try {
        await addMessageToAmoConversation({
          conversation,
          text,
          direction: 'from_telegram'
        });
        logger.info('Telegram message delivered to amoCRM', {
          chatId,
          businessConnectionId,
          leadId: conversation.amo_lead_id || null,
          contactId: conversation.amo_contact_id || null
        });
      } catch (e) {
        logger.error('Failed to deliver Telegram message to amoCRM', {
          chatId,
          businessConnectionId,
          error: e.response?.data || e.message
        });
      }
    }
  );

  res.sendStatus(200);
});

app.post('/api/telegram/setup-webhook', async (req, res) => {
  const webhookUrl = req.body?.webhookUrl || 'https://corsa-crm.ru/api/telegram/webhook';

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/setWebhook`,
      { url: webhookUrl },
      { timeout: 10000 }
    );
    res.json({ success: true, webhookUrl, telegram: response.data });
  } catch (error) {
    logger.error('Failed to set Telegram webhook', { error: error.response?.data || error.message });
    res.status(500).json({ success: false, error: 'Failed to set Telegram webhook' });
  }
});

app.get('/api/telegram/business/status', (req, res) => {
  const subdomain = normalizeAmoSubdomain(req.query.subdomain);

  const query = subdomain
    ? `SELECT business_connection_id, amo_subdomain, is_enabled, updated_at
       FROM telegram_business_connections
       WHERE amo_subdomain = ?
       ORDER BY updated_at DESC LIMIT 1`
    : `SELECT business_connection_id, amo_subdomain, is_enabled, updated_at
       FROM telegram_business_connections
       ORDER BY updated_at DESC LIMIT 1`;

  const params = subdomain ? [subdomain] : [];

  db.get(query, params, (err, row) => {
    if (err || !row) {
      return res.json({ connected: false, subdomain: subdomain || null });
    }

    const hasRealBusinessConnection =
      Boolean(row.business_connection_id) &&
      !String(row.business_connection_id).startsWith('pending_') &&
      Boolean(row.is_enabled);

    res.json({
      connected: hasRealBusinessConnection,
      businessConnectionId: row.business_connection_id,
      subdomain: row.amo_subdomain,
      updatedAt: row.updated_at
    });
  });
});

// Последние диалоги Telegram, привязанные к поддомену amo (бот не отдаёт список личных чатов — только связки из Corsa)
app.get('/api/telegram/conversations', (req, res) => {
  const subdomain = normalizeAmoSubdomain(req.query.subdomain);
  const rawLimit = parseInt(String(req.query.limit || '5'), 10);
  const limit = Number.isFinite(rawLimit) ? Math.min(Math.max(rawLimit, 1), 25) : 5;

  if (!subdomain) {
    return res.status(400).json({ error: 'subdomain query parameter required' });
  }

  db.all(
    `SELECT id, telegram_chat_id, telegram_user_id, amo_lead_id, amo_contact_id, channel, created_at, amo_subdomain
     FROM conversations
     WHERE amo_subdomain = ?
       AND channel IN ('telegram', 'telegram_business', 'telegram_mtproto')
     ORDER BY id DESC
     LIMIT ?`,
    [subdomain, limit],
    async (err, rows) => {
      if (err) {
        logger.error('conversations list failed', err);
        return res.status(500).json({ error: 'DB error' });
      }

      const token = process.env.TELEGRAM_TOKEN;
      const list = [];
      for (const row of rows || []) {
        let title =
          row.channel === 'telegram_mtproto'
            ? `Диалог ${row.telegram_chat_id}`
            : row.telegram_user_id && row.telegram_user_id !== row.telegram_chat_id
              ? `user:${row.telegram_user_id}`
              : `chat:${row.telegram_chat_id}`;
        if (token && row.telegram_chat_id && row.channel !== 'telegram_mtproto') {
          try {
            const chatRes = await axios.get(`https://api.telegram.org/bot${token}/getChat`, {
              params: { chat_id: row.telegram_chat_id },
              timeout: 5000
            });
            const c = chatRes.data?.result;
            if (chatRes.data?.ok && c) {
              title =
                c.title ||
                [c.first_name, c.last_name].filter(Boolean).join(' ') ||
                (c.username ? `@${c.username}` : null) ||
                title;
            }
          } catch (e) {
            /* имя недоступно — оставляем запасной заголовок */
          }
        }
        list.push({
          id: row.id,
          telegramChatId: row.telegram_chat_id,
          amoLeadId: row.amo_lead_id,
          amoContactId: row.amo_contact_id,
          channel: row.channel,
          title,
          createdAt: row.created_at
        });
      }

      res.json({ conversations: list });
    }
  );
});

// Telegram «Связанные устройства» (MTProto QR tg://login)
app.post('/api/auth/telegram/device/start', (req, res) => {
  try {
    const raw =
      (req.body && req.body.subdomain) ||
      req.query.subdomain ||
      '';
    const subdomain = normalizeAmoSubdomain(raw);
    if (!subdomain) {
      return res.status(400).json({ error: 'subdomain required' });
    }
    const sessionId = telegramDeviceAuth.startDeviceQrSession(subdomain);
    res.json({ sessionId, mode: 'linked_devices' });
  } catch (e) {
    logger.error('[tg-device] start failed', e.message || e);
    res.status(400).json({ error: e.message || 'start failed' });
  }
});

app.get('/api/auth/telegram/device/:sessionId', (req, res) => {
  const snap = telegramDeviceAuth.getDeviceSession(req.params.sessionId);
  if (!snap) return res.status(404).json({ error: 'Session not found' });
  const payload = {
    status: snap.status,
    userId: snap.userId,
    username: snap.username,
    error: snap.error,
    passwordHint: snap.passwordHint,
    qrExpiresAt: snap.qrExpiresAt
  };
  if (snap.qrLink) {
    payload.qrData = snap.qrLink;
    payload.qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(snap.qrLink)}`;
  }
  res.json(payload);
});

app.post('/api/auth/telegram/device/:sessionId/password', (req, res) => {
  const ok = telegramDeviceAuth.submitDevicePassword(
    req.params.sessionId,
    (req.body && req.body.password) || ''
  );
  res.json({ ok });
});

/* ============================================================
   ✈️ TELEGRAM OAUTH (legacy — через бота, для совместимости)
============================================================ */

app.get('/api/auth/telegram', (req, res) => {
  const botUsername = process.env.TELEGRAM_BOT_USERNAME || 'your_bot_name';
  const startParam = `auth_${crypto.randomBytes(8).toString('hex')}`;
  
  res.redirect(`https://t.me/${botUsername}?start=${startParam}`);
});

app.get('/api/auth/telegram/callback', async (req, res) => {
  const { user_id, auth_data } = req.query;
  
  if (!user_id) return res.status(400).send('No user_id');
  
  try {
    await new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO conversations (telegram_chat_id, created_at) VALUES (?, ?)`,
        [user_id, new Date()],
        err => err ? reject(err) : resolve()
      );
    });

    logger.info(`Telegram connected for chat_id ${user_id}`);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>Telegram Connected</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:50px;">
        <h2 style="color:#24A1DE;">✅ Telegram подключён!</h2>
        <p>Теперь вы будете получать уведомления.</p>
        <script>
          if (window.opener && !window.opener.closed) {
            window.opener.postMessage({ type: 'TELEGRAM_SUCCESS' }, '*');
          }
          setTimeout(() => window.close(), 2000);
        </script>
      </body>
      </html>
    `);

  } catch (err) {
    logger.error('Telegram connect failed', { error: err.message });
    res.status(500).send('Telegram authentication failed');
  }
});

/* ============================================================
   💼 LINKEDIN OAUTH
============================================================ */

app.get('/api/auth/linkedin', (req, res) => {
  const state = crypto.randomBytes(16).toString('hex');
  const scope = encodeURIComponent('r_liteprofile r_emailaddress w_member_social');
  
  const url = `https://www.linkedin.com/oauth/v2/authorization` +
    `?response_type=code` +
    `&client_id=${process.env.LINKEDIN_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(process.env.LINKEDIN_REDIRECT_URI)}` +
    `&state=${state}` +
    `&scope=${scope}`;
  
  res.redirect(url);
});

app.get('/api/auth/linkedin/callback', async (req, res) => {
  const { code, state } = req.query;
  
  try {
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { access_token, expires_in } = tokenResponse.data;

    const profileResponse = await axios.get('https://api.linkedin.com/v2/me', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    });

    const emailResponse = await axios.get(
      'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
      { headers: { 'Authorization': `Bearer ${access_token}` } }
    );

    const email = emailResponse.data.elements[0]?.['handle~']?.emailAddress;
    const profile = profileResponse.data;

    await new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO linkedin_users 
        (linkedin_id, access_token, expires_at, email, first_name, last_name) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          profile.id,
          access_token,
          Math.floor(Date.now() / 1000) + expires_in,
          email,
          profile.firstName?.localized?.en_US,
          profile.lastName?.localized?.en_US
        ],
        err => err ? reject(err) : resolve()
      );
    });

    logger.info(`LinkedIn OAuth success for ${profile.id}`);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>LinkedIn Connected</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:50px;">
        <h2 style="color:#0077b5;">✅ LinkedIn подключён!</h2>
        <p>Welcome, ${profile.firstName?.localized?.en_US}!</p>
        <script>
          if (window.opener && !window.opener.closed) {
            window.opener.postMessage({ type: 'LINKEDIN_SUCCESS' }, '*');
          }
          setTimeout(() => window.close(), 2000);
        </script>
      </body>
      </html>
    `);

  } catch (err) {
    logger.error('LinkedIn OAuth failed', { error: err.response?.data || err.message });
    res.status(500).send('LinkedIn authentication failed');
  }
});

/* ============================================================
   🔗 CHECK CONNECTION & LINK CHAT (для amoCRM)
============================================================ */

app.post('/check-connection', (req, res) => {
  const { leadId, entityType } = req.body;
  const field = entityType === 'LEAD' ? 'amo_lead_id' : 'amo_contact_id';

  db.get(`SELECT * FROM conversations WHERE ${field} = ?`, [leadId], (err, row) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({
      connected: !!row,
      telegramChatId: row?.telegram_chat_id || null
    });
  });
});

app.post('/link-chat', (req, res) => {
  const {
    chatId,
    leadId,
    entityType,
    subdomain,
    businessConnectionId = null,
    telegramUserId = null
  } = req.body;
  if (!chatId || !leadId || !entityType)
    return res.json({ success: false, error: 'Missing fields' });

  const field = entityType === 'LEAD' ? 'amo_lead_id' : 'amo_contact_id';
  const normalizedSubdomain = normalizeAmoSubdomain(subdomain);

  db.get('SELECT * FROM conversations WHERE telegram_chat_id = ?', [chatId], (err, row) => {
    if (err) return res.json({ success: false, error: 'DB error' });

    if (row) {
      db.run(
        `UPDATE conversations
         SET ${field} = ?,
             amo_subdomain = COALESCE(?, amo_subdomain),
             business_connection_id = COALESCE(?, business_connection_id),
             telegram_user_id = COALESCE(?, telegram_user_id),
             channel = CASE WHEN ? IS NOT NULL THEN 'telegram_business' ELSE channel END
         WHERE telegram_chat_id = ?`,
        [leadId, normalizedSubdomain, businessConnectionId, telegramUserId, businessConnectionId, chatId],
        () => res.json({ success: true })
      );
    } else {
      db.run(
        `INSERT INTO conversations (telegram_chat_id, telegram_user_id, business_connection_id, ${field}, amo_subdomain, channel)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          chatId,
          telegramUserId,
          businessConnectionId,
          leadId,
          normalizedSubdomain,
          businessConnectionId ? 'telegram_business' : 'telegram'
        ],
        () => res.json({ success: true })
      );
    }
  });
});

/* ============================================================
   🔔 AMO WEBHOOK → TELEGRAM
============================================================ */

const axiosTelegram = axios.create({ timeout: 10000 });
const TELEGRAM_TO_AMO_PREFIX = '[TG]';

function normalizeAmoSubdomain(subdomainOrHost) {
  if (!subdomainOrHost) return null;
  return String(subdomainOrHost)
    .replace(/^https?:\/\//, '')
    .replace(/\.amocrm\.ru\/?$/, '')
    .trim()
    .toLowerCase();
}

async function getDefaultAmoSubdomain() {
  return new Promise((resolve) => {
    db.get(
      `SELECT amo_subdomain FROM users ORDER BY id DESC LIMIT 1`,
      [],
      (err, row) => resolve(err ? null : row?.amo_subdomain || null)
    );
  });
}

async function addMessageToAmoConversation({ subdomain, conversation, text, direction }) {
  if (!conversation) return;

  const entityType = conversation.amo_lead_id ? 'leads' : (conversation.amo_contact_id ? 'contacts' : null);
  const entityId = conversation.amo_lead_id || conversation.amo_contact_id;
  if (!entityType || !entityId) return;

  const resolvedSubdomain =
    normalizeAmoSubdomain(subdomain) ||
    normalizeAmoSubdomain(conversation.amo_subdomain) ||
    await getDefaultAmoSubdomain();

  if (!resolvedSubdomain) throw new Error('No amo subdomain for conversation');

  const accessToken = await getValidAccessToken(resolvedSubdomain);
  const noteText = direction === 'from_telegram'
    ? `${TELEGRAM_TO_AMO_PREFIX} ${text}`
    : text;

  await axios.post(
    `https://${resolvedSubdomain}.amocrm.ru/api/v4/${entityType}/notes`,
    [
      {
        entity_id: Number(entityId),
        note_type: 'common',
        params: { text: noteText }
      }
    ],
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      timeout: 10000
    }
  );
}

telegramDeviceAuth.setMessageHandler(({ subdomain, telegramChatId, text }) => {
  return new Promise((resolve) => {
    db.get(
      `SELECT * FROM conversations WHERE amo_subdomain = ? AND telegram_chat_id = ?`,
      [subdomain, telegramChatId],
      async (err, conv) => {
        if (err || !conv) return resolve();
        try {
          await addMessageToAmoConversation({
            conversation: conv,
            text,
            direction: 'from_telegram',
            subdomain
          });
        } catch (e) {
          logger.error('MtProto → amoCRM', e.response?.data || e.message || e);
        }
        resolve();
      }
    );
  });
});

function extractAmoEvent(payload) {
  if (payload?.event && payload?.entity?.id) {
    return {
      event: payload.event,
      entityIds: [String(payload.entity.id)]
    };
  }

  const entities = ['leads', 'contacts', 'companies', 'customers', 'notes'];
  const actions = ['add', 'update', 'status', 'delete', 'restore', 'note'];

  for (const entityName of entities) {
    const entityData = payload?.[entityName];
    if (!entityData) continue;

    for (const actionName of actions) {
      const actionData = entityData[actionName];
      if (!actionData) continue;

      const rows = Array.isArray(actionData) ? actionData : Object.values(actionData);
      const ids = rows
        .map(item => item?.entity_id || item?.element_id || item?.id)
        .filter(Boolean)
        .map(String);

      if (ids.length > 0) {
        const first = rows[0] || {};
        return {
          event: `${entityName}.${actionName}`,
          entityName,
          actionName,
          entityIds: ids,
          text: first.params?.text || first.text || null
        };
      }
    }
  }

  return null;
}

app.post('/amo-webhook', async (req, res) => {
  const extracted = extractAmoEvent(req.body);
  if (!extracted) return res.json({ ok: true });

  const { event, entityIds } = extracted;
  const uniqueEntityIds = [...new Set(entityIds)];

  try {
    for (const entityId of uniqueEntityIds) {
      const row = await new Promise((resolve, reject) => {
        db.get(
          `SELECT * FROM conversations WHERE amo_contact_id = ? OR amo_lead_id = ?`,
          [entityId, entityId],
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
      });

      if (!row?.telegram_chat_id) continue;

      const isManagerNote = extracted.actionName === 'note' || (extracted.actionName === 'add' && extracted.entityName === 'notes');
      let outboundText = `🔔 amoCRM event: ${event}\n\nEntity ID: ${entityId}`;

      if (isManagerNote && extracted.text) {
        const noteText = String(extracted.text).trim();
        if (noteText.startsWith(TELEGRAM_TO_AMO_PREFIX)) continue;
        outboundText = `👤 Менеджер:\n${noteText}`;
      }

      const telegramPayload = {
        chat_id: row.telegram_chat_id,
        text: outboundText
      };

      if (row.business_connection_id) {
        telegramPayload.business_connection_id = row.business_connection_id;
      }

      await axiosTelegram.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
        telegramPayload
      );
      logger.info('Telegram notification sent', { chat_id: row.telegram_chat_id, event, entityId });
    }
  } catch (e) {
    logger.error('amo-webhook processing error', { error: e.message });
  }

  res.json({ ok: true });
});

/* ============================================================
   🧹 ОЧИСТКА ПРОСРОЧЕННЫХ СЕССИЙ (раз в 5 минут)
============================================================ */
function cleanupExpiredSessions() {
  db.run(
    `DELETE FROM auth_sessions 
     WHERE status = 'pending' 
     AND expires_at < CURRENT_TIMESTAMP`,
    (err) => {
      if (err) logger.error('Cleanup failed', err);
      else logger.info('Cleaned up expired sessions');
    }
  );
}
setInterval(cleanupExpiredSessions, 5 * 60 * 1000);

function cleanupOAuthStates() {
  if (!global.oauthStates) return;

  const ttlMs = 30 * 60 * 1000;
  const now = Date.now();

  for (const [state, payload] of Object.entries(global.oauthStates)) {
    if (!payload?.ts || now - payload.ts > ttlMs) {
      delete global.oauthStates[state];
    }
  }
}
setInterval(cleanupOAuthStates, 5 * 60 * 1000);

/* ============================================================
   🌐 FALLBACK FOR REACT ROUTER (должен быть после всех API роутов)
============================================================ */
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Fallback для React Router - отдаём index.html для всех не-API запросов
  app.use((req, res, next) => {
    // Пропускаем API запросы
    if (req.path.startsWith('/api') || 
        req.path.startsWith('/oauth') || 
        req.path.startsWith('/callback') ||
        req.path.startsWith('/amo-webhook') ||
        req.path.startsWith('/check-connection') ||
        req.path.startsWith('/link-chat')) {
      return next();
    }
    // Отдаём index.html для всех остальных запросов
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
}
/* ============================================================
   📬 MASS MESSAGING & TEMPLATES (Anti-Ban Logic)
============================================================ */

// Хранилище шаблонов (в реальном проекте — в БД)
const messageTemplates = {
  welcome: {
    text: 'Привет, {{name}}! Спасибо, что обратились. Мы скоро свяжемся с вами.',
    platform: 'telegram,vk'
  },
  reminder: {
    text: 'Напоминаем, что у вас запланирована встреча {{time}}. Подробности в amoCRM.',
    platform: 'telegram'
  },
  promotion: {
    text: '🔥 Специальное предложение для вас: {{offer}}. Акция до {{end_date}}!',
    platform: 'telegram,vk'
  }
};

// Состояние отправки (для отслеживания прогресса)
const sendingStates = new Map(); // { jobId: { total, sent, failed, status } }

// 1. Получить список шаблонов
app.get('/api/templates', (req, res) => {
  res.json({ templates: Object.keys(messageTemplates) });
});

// 2. Получить шаблон по ID
app.get('/api/templates/:id', (req, res) => {
  const { id } = req.params;
  const template = messageTemplates[id];
  if (!template) return res.status(404).json({ error: 'Template not found' });
  res.json({ ...template, id });
});

// 3. Отправить массовую рассылку (с безопасной логикой)
app.post('/api/messages/send-bulk', async (req, res) => {
  const { platform, message, templateId, recipients, delay = 2000 } = req.body;

  // Валидация
  if (!platform || !(message || templateId) || !recipients || !Array.isArray(recipients)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Если шаблон — подставляем
  let finalMessage = message;
  if (templateId) {
    const template = messageTemplates[templateId];
    if (!template) return res.status(404).json({ error: 'Template not found' });
    if (!template.platform.includes(platform)) return res.status(400).json({ error: 'Platform not allowed for this template' });
    finalMessage = template.text;
  }

  // Проверка, что пользователь авторизован
  const subdomain = req.query.subdomain || req.body.subdomain;
  if (!subdomain) return res.status(401).json({ error: 'Subdomain required' });

  // Получить токен из БД
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM users_accounts WHERE amo_subdomain = ?', [subdomain], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  // --- Анти-бан логика ---
  const jobId = crypto.randomUUID();
  sendingStates.set(jobId, { total: recipients.length, sent: 0, failed: 0, status: 'sending' });

  // Асинхронная отправка (не ждём здесь)
  (async () => {
    let sentCount = 0;
    let failedCount = 0;

    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i];

      try {
        // Задержка между отправками (2 секунды по умолчанию)
        await new Promise(resolve => setTimeout(resolve, delay));

        let response;

        if (platform === 'telegram') {
          // Получить chat_id из БД
          const conn = await new Promise((resolve, reject) => {
            db.get('SELECT telegram_chat_id FROM conversations WHERE amo_contact_id = ?', [recipient.contactId], (err, row) => {
              if (err) reject(err);
              else resolve(row);
            });
          });

          if (!conn || !conn.telegram_chat_id) {
            failedCount++;
            continue;
          }

          response = await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
              chat_id: conn.telegram_chat_id,
              text: finalMessage.replace('{{name}}', recipient.name || '').replace('{{offer}}', recipient.offer || ''),
              parse_mode: 'HTML'
            }
          );

        } else if (platform === 'vk') {
          // Получить user_id из БД
          const conn = await new Promise((resolve, reject) => {
            db.get('SELECT vk_user_id FROM user_connections WHERE platform = ? AND user_id = ?', ['vk', user.id], (err, row) => {
              if (err) reject(err);
              else resolve(row);
            });
          });

          if (!conn || !conn.vk_user_id) {
            failedCount++;
            continue;
          }

          response = await axios.post(
            'https://api.vk.com/method/messages.send',
            {
              user_id: conn.vk_user_id,
              message: finalMessage.replace('{{name}}', recipient.name || ''),
              random_id: Date.now() + i, // Уникальный ID
              v: '5.199',
              access_token: process.env.VK_ACCESS_TOKEN
            }
          );
        }

        // Логируем отправку
        db.run(
          `INSERT INTO bulk_messages_log (job_id, platform, message, recipient_id, status, sent_at) 
           VALUES (?, ?, ?, ?, ?, ?)`,
          [jobId, platform, finalMessage, recipient.contactId, 'sent', new Date()]
        );

        sentCount++;

      } catch (err) {
        failedCount++;
        logger.error(`Failed to send message to ${recipient.contactId}:`, err.message);

        // Логируем ошибку
        db.run(
          `INSERT INTO bulk_messages_log (job_id, platform, message, recipient_id, status, error, sent_at) 
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [jobId, platform, finalMessage, recipient.contactId, 'failed', err.message, new Date()]
        );
      }

      // Обновляем статус
      sendingStates.set(jobId, { total: recipients.length, sent: sentCount, failed: failedCount, status: 'sending' });
    }

    // Завершаем
    sendingStates.set(jobId, { total: recipients.length, sent: sentCount, failed: failedCount, status: 'completed' });
  })();

  res.json({ success: true, jobId, totalRecipients: recipients.length });
});

// 4. Получить статус отправки
app.get('/api/messages/send-bulk/:jobId', (req, res) => {
  const { jobId } = req.params;
  const state = sendingStates.get(jobId);
  if (!state) return res.status(404).json({ error: 'Job not found' });
  res.json(state);
});

// 5. Логи отправки
app.get('/api/messages/send-bulk/:jobId/logs', (req, res) => {
  const { jobId } = req.params;
  db.all(
    'SELECT * FROM bulk_messages_log WHERE job_id = ? ORDER BY sent_at DESC',
    [jobId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.json({ logs: rows });
    }
  );
});

/* SPA fallback: /dashboard, /widget-page и др. отдаём index.html (API и oauth исключаем) */
if (process.env.NODE_ENV === 'production') {
  const indexHtml = path.join(__dirname, '../../frontend/dist/index.html');
  app.use((req, res, next) => {
    if (req.method !== 'GET') return next();
    const p = req.path;
    if (p.startsWith('/api')) return next();
    if (p === '/oauth' || p.startsWith('/oauth/')) return next();
    if (p === '/callback' || p.startsWith('/callback/')) return next();
    if (p.startsWith('/connect-telegram')) return next();
    if (p.startsWith('/link-chat')) return next();
    if (p.startsWith('/check-connection')) return next();
    if (p.startsWith('/amo-webhook')) return next();
    res.sendFile(indexHtml, (err) => err && next(err));
  });
}

/* ============================================================
   🚀 START SERVER
============================================================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`, {
    env: process.env.NODE_ENV,
    redirect_uri: process.env.REDIRECT_URI
  });
});

module.exports = app;