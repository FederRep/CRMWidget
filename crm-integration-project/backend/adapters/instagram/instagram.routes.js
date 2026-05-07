const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * ===============================
 * INSTAGRAM API
 * ===============================
 */

// 1. Получить Instagram Business аккаунты
router.get('/accounts', async (req, res) => {
  try {
    const { access_token } = req.query;
    
    if (!access_token) {
      return res.status(400).json({ error: 'access_token required' });
    }

    // Получаем Instagram Business Account
    const response = await axios.get(
      `https://graph.facebook.com/v18.0/me/accounts`,
      {
        params: {
          access_token,
          fields: 'id,name,instagram_business_account'
        }
      }
    );

    res.json({ accounts: response.data.data });
  } catch (error) {
    console.error('Instagram accounts error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get Instagram accounts' });
  }
});

// 2. Получить сообщения Instagram
router.get('/messages/:igAccountId', async (req, res) => {
  try {
    const { access_token } = req.query;
    const { igAccountId } = req.params;

    const response = await axios.get(
      `https://graph.facebook.com/v18.0/${igAccountId}/conversations`,
      {
        params: {
          access_token,
          fields: 'id,updated_time,participants,message_count'
        }
      }
    );

    res.json({ conversations: response.data.data });
  } catch (error) {
    console.error('Instagram messages error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get messages' });
  }
});

// 3. Отправить сообщение Instagram
router.post('/send', async (req, res) => {
  try {
    const { access_token, recipientId, message } = req.body;

    if (!access_token || !recipientId || !message) {
      return res.status(400).json({ error: 'access_token, recipientId and message required' });
    }

    const response = await axios.post(
      `https://graph.facebook.com/v18.0/me/messages`,
      {
        recipient: { id: recipientId },
        message: { text: message }
      },
      {
        params: { access_token }
      }
    );

    res.json({ success: true, messageId: response.data.message_id });
  } catch (error) {
    console.error('Instagram send error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// 4. Webhook для получения сообщений
router.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'instagram') {
    const entries = body.entry || [];
    
    entries.forEach(entry => {
      const messaging = entry.messaging || [];
      messaging.forEach(event => {
        console.log('Instagram message received:', event);
        // TODO: Обработать входящее сообщение
        // - Сохранить в БД
        // - Создать/обновить диалог
        // - Отправить webhook в amoCRM
      });
    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.status(404).send('NOT_FOUND');
  }
});

// 5. Подтверждение webhook (verification)
router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  // Проверь токен из настроек
  if (mode === 'subscribe' && token === process.env.INSTAGRAM_WEBHOOK_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
