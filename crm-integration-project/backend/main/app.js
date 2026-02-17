require('dotenv').config();

const rawSubdomain = process.env.AMOCRM_SUBDOMAIN
  ?.replace('https://', '')
  ?.replace('.amocrm.ru', '')
  ?.trim();

if (!rawSubdomain) {
  throw new Error('AMOCRM_SUBDOMAIN is not defined in .env');
}

const AMO_BASE_URL = `https://${rawSubdomain}.amocrm.ru`;

const express = require('express');
const axios = require('axios');
const EventEmitter = require('events');
const db = require('./database');
const winston = require('winston');

// Настроим axios с timeout для Telegram
const axiosTelegram = axios.create({ // ✅ Раскомментирован
  timeout: 10000
});

// Настройка логгера
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Подключаем amoAPI
const AmoAPI = require('./amoAPI');
const amo = new AmoAPI(process.env.AMOCRM_SUBDOMAIN, process.env.AMOCRM_TOKEN, db, logger);

logger.info('Application started');

// Проверим подключение к amoCRM при запуске
amo.checkConnection().then(isConnected => {
  if (isConnected) {
    logger.info('amoCRM connection OK');
  } else {
    logger.error('amoCRM connection FAILED');
  }
}).catch(err => {
  logger.error('amoCRM connection check failed', { error: err.message });
});

// Общий eventBus
const eventBus = new EventEmitter();

// Telegram Worker (webhook)
const app = express();
app.use(express.json());

// Добавленный маршрут для localtunnel
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.post('/webhook', async (req, res) => {
  try {
    logger.info('Webhook called', { body: req.body });

    const update = req.body;

    if (update.message && update.message.text) {
      const chatId = update.message.chat.id;
      const text = update.message.text;

      logger.info('Received message', { chatId, text });

      // Проверим, есть ли чат в базе
      const conversation = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM conversations WHERE telegram_chat_id = ?', [String(chatId)], (err, row) => {
          if (err) {
            logger.error('DB error', { error: err.message });
            reject(err);
          } else {
            resolve(row);
          }
        });
      });

      if (!conversation) {
        // Создаём новую запись
        await new Promise((resolve, reject) => {
          db.run(
            'INSERT INTO conversations (telegram_chat_id) VALUES (?)',
            [String(chatId)],
            function (err) {
              if (err) {
                logger.error('DB insert error', { error: err.message });
                reject(err);
              } else {
                const newConvId = this.lastID;

                logger.info('New conversation created in DB', { id: newConvId, telegram_chat_id: chatId });

                // Запишем сообщение
                db.run(
                  'INSERT INTO messages (conversation_id, text, direction) VALUES (?, ?, ?)',
                  [newConvId, text, 'incoming'],
                  (err) => {
                    if (err) logger.error('DB message insert error', { error: err.message });
                  }
                );

                // Вызовем событие
                eventBus.emit('message.incoming', {
                  channel: 'telegram',
                  conversationId: newConvId,
                  text,
                  timestamp: Date.now()
                });

                logger.info('← Telegram → Event', { text });

                resolve();
              }
            }
          );
        });
      } else {
        logger.info('Found existing conversation in DB', { conversation });

        // Запишем сообщение
        await new Promise((resolve, reject) => {
          db.run(
            'INSERT INTO messages (conversation_id, text, direction) VALUES (?, ?, ?)',
            [conversation.id, text, 'incoming'],
            (err) => {
              if (err) {
                logger.error('DB message insert error', { error: err.message });
                reject(err);
              } else {
                resolve();
              }
            }
          );
        });

        // Вызовем событие
        eventBus.emit('message.incoming', {
          channel: 'telegram',
          conversationId: conversation.id,
          text,
          timestamp: Date.now()
        });

        logger.info('← Telegram → Event', { text });
      }
    }

    res.status(200).send('OK');
  } catch (err) {
    logger.error('Webhook error', { error: err.message });
    res.status(500).send('Internal Server Error');
  }
});

// amo Worker (слушает incoming, вызывает outgoing)
logger.info('Registering message.incoming listener');

eventBus.on('message.incoming', async (msg) => {
  try {
    logger.info('Received message.incoming event', { msg });

    if (msg.channel === 'telegram') {
      logger.info('Channel is telegram, checking amo instance...');
      logger.info('Amo instance exists?', { exists: !!amo });
      logger.info('Amo methods available?', {
        createContact: typeof amo.createContact,
        createLead: typeof amo.createLead,
        addNote: typeof amo.addNote
      });

      // Найти или создать контакт и сделку в amoCRM
      const convRow = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM conversations WHERE id = ?', [msg.conversationId], (err, row) => {
          if (err) {
            logger.error('DB error', { error: err.message });
            reject(err);
          } else {
            resolve(row);
          }
        });
      });

      if (!convRow.amo_contact_id) {
        logger.info('Contact does not exist, creating...');
        const contact = await amo.createContact('Telegram User');
        if (contact) {
          logger.info('Contact created', { contact });

          // Обновим запись в базе
          await new Promise((resolve, reject) => {
            db.run(
              'UPDATE conversations SET amo_contact_id = ? WHERE id = ?',
              [contact.id, msg.conversationId],
              (err) => {
                if (err) {
                  logger.error('DB update error', { error: err.message });
                  reject(err);
                } else {
                  resolve();
                }
              }
            );
          });

          logger.info('Creating lead...');
          const lead = await amo.createLead('Telegram Chat', contact.id);
          if (lead) {
            logger.info('Lead created', { lead });

            // Обновим запись в базе
            await new Promise((resolve, reject) => {
              db.run(
                'UPDATE conversations SET amo_lead_id = ? WHERE id = ?',
                [lead.id, msg.conversationId],
                (err) => {
                  if (err) {
                    logger.error('DB update error', { error: err.message });
                    reject(err);
                  } else {
                    resolve();
                  }
                }
              );
            });

            logger.info('Adding note...');
            const note = await amo.addNote('contacts', contact.id, `Telegram message: ${msg.text}`);
            if (note) {
              logger.info('Note added', { note });
            } else {
              logger.error('Failed to add note');
            }
          }
        }
      } else {
        logger.info('Contact exists, adding note only...');
        const note = await amo.addNote('contacts', convRow.amo_contact_id, `Telegram message: ${msg.text}`);
        if (note) {
          logger.info('Note added', { note });
        } else {
          logger.error('Failed to add note');
        }
      }

      logger.info('Channel is telegram, forwarding to outgoing');
      eventBus.emit('message.outgoing', {
        ...msg,
        status: 'pending'
      });
    } else {
      logger.info('Channel is NOT telegram, skipping');
    }
  } catch (err) {
    logger.error('Message.incoming handler error', { error: err.message });
  }
});

// Telegram Sender (отправляет в Telegram)
logger.info('Registering message.outgoing listener');

eventBus.on('message.outgoing', async (msg) => {
  try {
    logger.info('Received message.outgoing event', { msg });

    if (msg.channel !== 'telegram') {
      logger.info('Channel is NOT telegram, skipping');
      return;
    }

    logger.info('Channel is telegram, attempting to send');

    const conversation = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM conversations WHERE id = ?', [msg.conversationId], (err, row) => {
        if (err) {
          logger.error('DB error', { error: err.message });
          reject(err);
        } else if (!row) {
          logger.error('Conversation not found', { conversationId: msg.conversationId });
          reject(new Error('Conversation not found'));
        } else {
          resolve(row);
        }
      });
    });

    const chatId = conversation.telegram_chat_id;

    logger.info('Sending message to chatId', { chatId, text: msg.text });

    const response = await axiosTelegram.post( // ✅ Теперь axiosTelegram определён
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, // ✅ Убраны пробелы
      {
        chat_id: chatId,
        text: msg.text
      }
    );

    logger.info('Telegram response', { response: response.data });

    // Обновим статус сообщения
    await new Promise((resolve, reject) => {
      db.run(
        'UPDATE messages SET direction = ? WHERE conversation_id = ? AND text = ?',
        ['outgoing', msg.conversationId, msg.text],
        (err) => {
          if (err) {
            logger.error('DB update error', { error: err.message });
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });

    msg.status = 'sent';
  } catch (err) {
    logger.error('Message.outgoing handler error', { error: err.response?.data || err.message });
  }
});

// OAuth-маршрут для amoCRM
app.get('/oauth', (req, res) => {
  const url = `https://podshivalovvfyodor.amocrm.ru/oauth?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&mode=popup`; // ✅ Убраны пробелы
  logger.info('Redirecting to OAuth', { url });
  res.redirect(url);
});

// Callback-маршрут для получения кода
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    logger.error('No code received from amoCRM');
    return res.status(400).send('No code provided');
  }

  logger.info('Received code', { code });

  try {
    const response = await axios.post(
      'https://podshivalovvfyodor.amocrm.ru/oauth2/access_token', // ✅ Убраны пробелы
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const { access_token, refresh_token, expires_in } = response.data;

    const expiresAt = Math.floor(Date.now() / 1000) + expires_in;

    // Сохраняем токены в базу
    await new Promise((resolve, reject) => {
      db.run(
        'INSERT OR REPLACE INTO users (amo_subdomain, access_token, refresh_token, expires_at) VALUES (?, ?, ?, ?)',
        [process.env.AMOCRM_SUBDOMAIN, access_token, refresh_token, expiresAt],
        (err) => {
          if (err) {
            logger.error('DB insert user error', { error: err.message });
            reject(err);
          } else {
            logger.info('User tokens saved to DB');
            resolve();
          }
        }
      );
    });

    logger.info('Access Token', { access_token: access_token.substring(0, 20) + '...' });
    logger.info('Refresh Token', { refresh_token: refresh_token.substring(0, 20) + '...' });
    logger.info('Expires in', { expires_in });

    res.send(`
      <h2>Authorized successfully!</h2>
      <p><strong>Access Token:</strong> ${access_token.substring(0, 20)}...</p>
      <p><strong>Refresh Token:</strong> ${refresh_token.substring(0, 20)}...</p>
      <p>Tokens saved to database.</p>
    `);

  } catch (err) {
    logger.error('OAuth error', { error: err.response?.data || err.message });
    res.status(500).send('Authorization failed');
  }
});

// Маршрут для проверки связи (для внешней интеграции)
app.post('/check-connection', async (req, res) => {
  try {
    const { leadId, entityType } = req.body;

    let conversation = null;

    if (entityType === 'LEAD' && leadId) {
      conversation = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM conversations WHERE amo_lead_id = ?', [leadId], (err, row) => {
          if (err) {
            logger.error('DB error', { error: err.message });
            reject(err);
          } else {
            resolve(row);
          }
        });
      });
    } else if (entityType === 'CONTACT' && leadId) {
      conversation = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM conversations WHERE amo_contact_id = ?', [leadId], (err, row) => {
          if (err) {
            logger.error('DB error', { error: err.message });
            reject(err);
          } else {
            resolve(row);
          }
        });
      });
    }

    if (conversation) {
      res.json({
        connected: true,
        telegramChatId: conversation.telegram_chat_id
      });
    } else {
      res.json({
        connected: false
      });
    }
  } catch (err) {
    logger.error('Check connection error', { error: err.message });
    res.status(500).json({ error: 'Server error' });
  }
});

// Маршрут для открытия формы подключения (для внешней интеграции)
app.get('/connect-telegram', (req, res) => {
  const { leadId, entityType } = req.query;

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Connect Telegram</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input { width: 100%; padding: 8px; }
        button { padding: 10px 20px; background-color: #0088cc; color: white; border: none; cursor: pointer; }
      </style>
    </head>
    <body>
      <h2>Connect Telegram Chat</h2>
      <form id="connectForm">
        <input type="hidden" name="leadId" value="${leadId || ''}" />
        <input type="hidden" name="entityType" value="${entityType || ''}" />
        <div class="form-group">
          <label>Your Telegram Chat ID:</label>
          <input type="text" name="chatId" placeholder="Enter your Telegram Chat ID" required />
        </div>
        <button type="submit">Connect</button>
      </form>

      <script>
        document.getElementById('connectForm').addEventListener('submit', async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData);

          try {
            const response = await fetch('https://nehemiah-unamusable-nikki.ngrok-free.dev/link-chat', { // ✅ Обновлён URL
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
              alert('Connected successfully!');
              window.close();
            } else {
              alert('Error: ' + result.error);
            }
          } catch (error) {
            alert('Server error');
          }
        });
      </script>
    </body>
    </html>
  `);
});

// Маршрут для привязки чата (для внешней интеграции)
app.post('/link-chat', async (req, res) => {
  try {
    const { chatId, leadId, entityType } = req.body;

    if (!chatId || !leadId || !entityType) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    let updateField = entityType === 'LEAD' ? 'amo_lead_id' : 'amo_contact_id';

    let conversation = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM conversations WHERE telegram_chat_id = ?', [chatId], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });

    if (conversation) {
      await new Promise((resolve, reject) => {
        db.run(
          'UPDATE conversations SET ' + updateField + ' = ? WHERE telegram_chat_id = ?',
          [leadId, chatId],
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    } else {
      await new Promise((resolve, reject) => {
        db.run(
          'INSERT INTO conversations (telegram_chat_id, ' + updateField + ') VALUES (?, ?)',
          [chatId, leadId],
          function (err) {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    }

    res.json({ success: true });
  } catch (err) {
    logger.error('Link chat error', { error: err.message });
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Маршрут для webhook от внешней интеграции
app.post('/amo-webhook', async (req, res) => {
  try {
    logger.info('AmoCRM external integration webhook called', { body: req.body });

    const { event, entity } = req.body;

    let telegramChatId = null;

    if (entity && entity.id) {
      // Попробуем найти чат по amo_contact_id или amo_lead_id
      const conversation = await new Promise((resolve, reject) => {
        db.get(
          'SELECT * FROM conversations WHERE amo_contact_id = ? OR amo_lead_id = ?',
          [entity.id, entity.id],
          (err, row) => {
            if (err) {
              logger.error('DB error', { error: err.message });
              reject(err);
            } else {
              resolve(row);
            }
          }
        );
      });

      if (conversation) {
        telegramChatId = conversation.telegram_chat_id;
      }
    }

    if (telegramChatId) {
      const text = `🔔 amoCRM: ${event}\nID: ${entity.id}\n${JSON.stringify(entity, null, 2).substring(0, 200)}`;

      await axiosTelegram.post( // ✅ Теперь axiosTelegram определён
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, // ✅ Убраны пробелы
        {
          chat_id: telegramChatId,
          text: text
        }
      );

      logger.info('Message sent to Telegram', { chatId: telegramChatId });
    } else {
      logger.warn('No Telegram chat linked to this amoCRM entity', { entityId: entity?.id });
    }

    res.status(200).json({ ok: true, message: 'Received' });
  } catch (err) {
    logger.error('AmoCRM external webhook error', { error: err.message });
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/widget.html', (req, res) => {
  res.sendFile(__dirname + '/widget.html');
});
app.get('/manifest.json', (req, res) => {
  res.sendFile(__dirname + '/manifest.json');
});

app.listen(3000, () => logger.info('App listening on port 3000'));
