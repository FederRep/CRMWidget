require('dotenv').config();

const express = require('express');
const axios = require('axios');
const EventEmitter = require('events');
const winston = require('winston');
const db = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());
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
   ✅ TEST ENDPOINT (STEP 3)
============================================================ */

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend works 🚀' });
});

/* ============================================================
   OAUTH START
============================================================ */

app.get('/oauth', (req, res) => {
  const subdomain = req.query.subdomain || process.env.AMOCRM_SUBDOMAIN;

  if (!subdomain) {
    return res.status(400).send('No subdomain provided');
  }

  const state = Buffer.from(
    JSON.stringify({ subdomain, ts: Date.now() })
  ).toString('base64');

  const url =
    `https://${subdomain}.amocrm.ru/oauth` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=${process.env.REDIRECT_URI}` +
    `&response_type=code` +
    `&mode=popup` +
    `&state=${state}`;

  logger.info('Redirecting to amoCRM OAuth');
  res.redirect(url);
});

/* ============================================================
   OAUTH CALLBACK
============================================================ */

app.get('/callback', async (req, res) => {
  const { code, state } = req.query;

  if (!code) return res.status(400).send('No code');
  if (!state) return res.status(400).send('No state');

  let subdomain;

  try {
    const stateData = JSON.parse(
      Buffer.from(state, 'base64').toString()
    );
    subdomain = stateData.subdomain;
  } catch (e) {
    return res.status(400).send('Invalid state');
  }

  try {
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

    logger.info(`OAuth success for ${subdomain}`);

    res.send(`
      <h2>Authorization successful ✅</h2>
      <script>
        setTimeout(()=>window.close(),1500)
      </script>
    `);

  } catch (err) {
    logger.error(err.response?.data || err.message);
    res.status(500).send('OAuth failed');
  }
});

/* ============================================================
   CHECK CONNECTION
============================================================ */

app.post('/check-connection', (req, res) => {
  const { leadId, entityType } = req.body;

  const field =
    entityType === 'LEAD'
      ? 'amo_lead_id'
      : 'amo_contact_id';

  db.get(
    `SELECT * FROM conversations WHERE ${field} = ?`,
    [leadId],
    (err, row) => {
      if (err) return res.status(500).json({ error: 'DB error' });

      res.json({
        connected: !!row,
        telegramChatId: row?.telegram_chat_id || null
      });
    }
  );
});

/* ============================================================
   LINK CHAT
============================================================ */

app.post('/link-chat', (req, res) => {
  const { chatId, leadId, entityType } = req.body;

  if (!chatId || !leadId || !entityType)
    return res.json({ success:false, error:'Missing fields' });

  const field =
    entityType === 'LEAD'
      ? 'amo_lead_id'
      : 'amo_contact_id';

  db.get(
    'SELECT * FROM conversations WHERE telegram_chat_id = ?',
    [chatId],
    (err, row) => {

      if (err) return res.json({ success:false, error:'DB error' });

      if (row) {
        db.run(
          `UPDATE conversations SET ${field} = ? WHERE telegram_chat_id = ?`,
          [leadId, chatId],
          () => res.json({ success:true })
        );
      } else {
        db.run(
          `INSERT INTO conversations (telegram_chat_id, ${field})
           VALUES (?, ?)`,
          [chatId, leadId],
          () => res.json({ success:true })
        );
      }
    }
  );
});

/* ============================================================
   AMO WEBHOOK
============================================================ */

const axiosTelegram = axios.create({ timeout: 10000 });

app.post('/amo-webhook', async (req, res) => {
  const { event, entity } = req.body;

  if (!entity?.id)
    return res.json({ ok:true });

  db.get(
    `SELECT * FROM conversations 
     WHERE amo_contact_id = ? OR amo_lead_id = ?`,
    [entity.id, entity.id],
    async (err, row) => {

      if (!row) return res.json({ ok:true });

      try {
        await axiosTelegram.post(
          `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
          {
            chat_id: row.telegram_chat_id,
            text: `amoCRM event: ${event}`
          }
        );
      } catch (e) {
        logger.error('Telegram send error');
      }

      res.json({ ok:true });
    }
  );
});

/* ============================================================
   START SERVER
============================================================ */

app.listen(3000, () => {
  logger.info('Server started on 3000');
});