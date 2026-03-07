require('dotenv').config({ 
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local' 
});

const express = require('express');
const axios = require('axios');
const EventEmitter = require('events');
const winston = require('winston');
const db = require('./database');
const cors = require('cors');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// 🔐 CORS: разрешаем запросы с домена и локалки (БЕЗ пробелов!)
app.use(cors({
  origin: ['https://corsa-crm.ru', 'https://www.corsa-crm.ru', 'http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());

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

/* ============================================================
   BASE ROUTE
============================================================ */
app.get('/', (req, res) => {
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

// Старт авторизации (редирект на amoCRM)
app.get('/oauth', (req, res) => {
  const subdomain = req.query.subdomain || process.env.AMOCRM_SUBDOMAIN;
  if (!subdomain) return res.status(400).send('No subdomain provided');

  const state = Buffer.from(JSON.stringify({ subdomain, ts: Date.now() })).toString('base64');
  const url = `https://${subdomain}.amocrm.ru/oauth` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}` +
    `&response_type=code` +
    `&mode=popup` +
    `&state=${state}`;

  logger.info('Redirecting to amoCRM OAuth', { redirect_uri: process.env.REDIRECT_URI });
  res.redirect(url);
});

// Callback — ГИБКИЙ РОУТ (поддерживает оба пути)
app.get(['/callback', '/api/auth/callback'], async (req, res) => {
  const { code, state } = req.query;
  logger.info('OAuth callback received', { code: code ? 'present' : 'missing', path: req.path });

  if (!code) return res.status(400).send('No code');
  if (!state) return res.status(400).send('No state');

  let subdomain;
  try {
    const stateData = JSON.parse(Buffer.from(state, 'base64').toString());
    subdomain = stateData.subdomain;
  } catch (e) {
    logger.error('Invalid state parameter', { error: e.message });
    return res.status(400).send('Invalid state');
  }

  try {
    const tokenUrl = `https://${subdomain}.amocrm.ru/oauth2/access_token`;
    logger.info('Exchanging code for token', { subdomain });

    const response = await axios.post(tokenUrl, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI
    }, { headers: { 'Content-Type': 'application/json' } });

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

    logger.info(`OAuth success for ${subdomain}`);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>Authorization Successful</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:50px;">
        <h2 style="color:#2ecc71;">✅ Authorization successful!</h2>
        <p>You can close this window and return to amoCRM.</p>
        <script>
          if (window.opener && !window.opener.closed) {
            window.opener.postMessage({ type: 'AUTH_SUCCESS', subdomain: '${subdomain}' }, '*');
          }
          setTimeout(() => window.close(), 2000);
        </script>
      </body>
      </html>
    `);

  } catch (err) {
    logger.error('OAuth failed', { error: err.response?.data || err.message, status: err.response?.status });
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>Authorization Failed</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:50px;">
        <h2 style="color:#e74c3c;">❌ Authorization failed</h2>
        <p><code>${err.response?.data?.error || err.message}</code></p>
        <p>Please try again or contact support.</p>
      </body>
      </html>
    `);
  }
});

/* ============================================================
   💬 VK OAUTH
============================================================ */

app.get('/api/auth/vk', (req, res) => {
  const state = crypto.randomBytes(16).toString('hex');
  const scope = 'offline,messages,groups,photos,wall';
  
  const url = `https://oauth.vk.com/authorize` +
    `?client_id=${process.env.VK_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(process.env.VK_REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=${scope}` +
    `&v=${process.env.VK_API_VERSION || '5.199'}`;
  
  res.redirect(url);
});

app.get('/api/auth/vk/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send('No code provided');

  try {
    const tokenResponse = await axios.post(
      'https://oauth.vk.com/access_token',
      new URLSearchParams({
        client_id: process.env.VK_CLIENT_ID,
        client_secret: process.env.VK_CLIENT_SECRET,
        redirect_uri: process.env.VK_REDIRECT_URI,
        code
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { access_token, user_id, expires_in } = tokenResponse.data;

    const profileResponse = await axios.get('https://api.vk.com/method/users.get', {
      params: {
        access_token,
        user_ids: user_id,
        fields: 'photo_200,first_name,last_name',
        v: process.env.VK_API_VERSION || '5.199'
      }
    });

    const user = profileResponse.data.response[0];

    await new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO vk_users 
        (vk_user_id, access_token, expires_at, first_name, last_name, photo_url) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
          user_id,
          access_token,
          expires_in === 0 ? null : Math.floor(Date.now() / 1000) + expires_in,
          user.first_name,
          user.last_name,
          user.photo_200
        ],
        err => err ? reject(err) : resolve()
      );
    });

    logger.info(`VK OAuth success for user ${user_id}`);

    res.send(`
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>VK Connected</title></head>
      <body style="font-family:system-ui,sans-serif;text-align:center;padding:50px;">
        <h2 style="color:#0077FF;">✅ ВКонтакте подключён!</h2>
        <p>Добро пожаловать, ${user.first_name} ${user.last_name}!</p>
        <script>
          if (window.opener && !window.opener.closed) {
            window.opener.postMessage({ type: 'VK_SUCCESS', userId: '${user_id}' }, '*');
          }
          setTimeout(() => window.close(), 2000);
        </script>
      </body>
      </html>
    `);

  } catch (err) {
    logger.error('VK OAuth failed', { error: err.response?.data || err.message });
    res.status(500).send('VK authentication failed');
  }
});

/* ============================================================
   ✈️ TELEGRAM QR AUTH (Wazzup-style)
============================================================ */

// 1. Создание сессии и генерация QR-кода
app.get('/api/auth/telegram/qr', (req, res) => {
  const sessionId = crypto.randomBytes(16).toString('hex');
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  
  db.run(
    `INSERT INTO auth_sessions (session_id, platform, status, expires_at) 
     VALUES (?, 'telegram', 'pending', ?)`,
    [sessionId, expiresAt],
    (err) => {
      if (err) {
        logger.error('Failed to create session', err);
        return res.status(500).json({ error: 'Failed to create session' });
      }
      
      const botUsername = process.env.TELEGRAM_BOT_USERNAME || 'your_bot_name';
      const deepLink = `https://t.me/${botUsername}?start=auth_${sessionId}`;
      
      logger.info('Telegram QR session created', { sessionId });
      
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
  const { chatId, leadId, entityType } = req.body;
  if (!chatId || !leadId || !entityType)
    return res.json({ success: false, error: 'Missing fields' });

  const field = entityType === 'LEAD' ? 'amo_lead_id' : 'amo_contact_id';

  db.get('SELECT * FROM conversations WHERE telegram_chat_id = ?', [chatId], (err, row) => {
    if (err) return res.json({ success: false, error: 'DB error' });

    if (row) {
      db.run(`UPDATE conversations SET ${field} = ? WHERE telegram_chat_id = ?`, [leadId, chatId], () => res.json({ success: true }));
    } else {
      db.run(`INSERT INTO conversations (telegram_chat_id, ${field}) VALUES (?, ?)`, [chatId, leadId], () => res.json({ success: true }));
    }
  });
});

/* ============================================================
   🔔 AMO WEBHOOK → TELEGRAM
============================================================ */

const axiosTelegram = axios.create({ timeout: 10000 });

app.post('/amo-webhook', async (req, res) => {
  const { event, entity } = req.body;
  if (!entity?.id) return res.json({ ok: true });

  db.get(
    `SELECT * FROM conversations WHERE amo_contact_id = ? OR amo_lead_id = ?`,
    [entity.id, entity.id],
    async (err, row) => {
      if (!row) return res.json({ ok: true });

      try {
        await axiosTelegram.post(
          `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
          {
            chat_id: row.telegram_chat_id,
            text: `🔔 amoCRM event: ${event}\n\nEntity ID: ${entity.id}`
          }
        );
        logger.info('Telegram notification sent', { chat_id: row.telegram_chat_id });
      } catch (e) {
        logger.error('Telegram send error', { error: e.message });
      }
      res.json({ ok: true });
    }
  );
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