const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * ===============================
 * AVITO API
 * ===============================
 */

// 1. Получить чаты Авито
router.get('/chats', async (req, res) => {
  try {
    const { access_token, userId } = req.query;

    if (!access_token || !userId) {
      return res.status(400).json({ error: 'access_token and userId required' });
    }

    const response = await axios.get(
      'https://api.avito.ru/messenger/v3/chats',
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
        params: {
          user_id: userId
        }
      }
    );

    res.json({ chats: response.data });
  } catch (error) {
    console.error('Avito chats error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get Avito chats' });
  }
});

// 2. Получить сообщения из чата
router.get('/chats/:chatId/messages', async (req, res) => {
  try {
    const { access_token } = req.query;
    const { chatId } = req.params;

    if (!access_token) {
      return res.status(400).json({ error: 'access_token required' });
    }

    const response = await axios.get(
      `https://api.avito.ru/messenger/v3/chats/${chatId}/messages`,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ messages: response.data });
  } catch (error) {
    console.error('Avito messages error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get messages' });
  }
});

// 3. Отправить сообщение в Авито
router.post('/send', async (req, res) => {
  try {
    const { access_token, chatId, message } = req.body;

    if (!access_token || !chatId || !message) {
      return res.status(400).json({ error: 'access_token, chatId and message required' });
    }

    const response = await axios.post(
      `https://api.avito.ru/messenger/v3/chats/${chatId}/messages`,
      {
        message: message,
        type: 'text'
      },
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ success: true, messageId: response.data.id });
  } catch (error) {
    console.error('Avito send error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// 4. Получить профиль пользователя
router.get('/profile', async (req, res) => {
  try {
    const { access_token } = req.query;

    if (!access_token) {
      return res.status(400).json({ error: 'access_token required' });
    }

    const response = await axios.get(
      'https://api.avito.ru/core/v1/accounts/me',
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    );

    res.json({ profile: response.data });
  } catch (error) {
    console.error('Avito profile error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

// 5. Webhook для новых сообщений (если Авито поддерживает)
router.post('/webhook', (req, res) => {
  const { event, payload } = req.body;

  if (event === 'new_message') {
    console.log('Avito message received:', payload);
    // TODO: Обработать входящее сообщение
    res.status(200).json({ ok: true });
  } else {
    res.status(200).json({ ok: true });
  }
});

module.exports = router;
