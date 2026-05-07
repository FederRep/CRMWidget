const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * ===============================
 * LINKEDIN API
 * ===============================
 */

// 1. LinkedIn OAuth - начать авторизацию
router.get('/auth', (req, res) => {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI || 'https://corsa-crm.ru/api/auth/linkedin/callback';
  const state = Math.random().toString(36).substring(7);

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization` +
    `?response_type=code` +
    `&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&state=${state}` +
    `&scope=r_liteprofile%20r_emailaddress%20w_member_social%20w_conversations`;

  res.json({ authUrl });
});

// 2. LinkedIn OAuth Callback
router.get('/callback', async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code required' });
  }

  try {
    // Обмен кода на токен
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const { access_token, expires_in, refresh_token } = tokenResponse.data;

    res.json({
      success: true,
      access_token,
      expires_in,
      refresh_token
    });
  } catch (error) {
    console.error('LinkedIn token error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get LinkedIn token' });
  }
});

// 3. Получить профиль пользователя
router.get('/profile', async (req, res) => {
  try {
    const { access_token } = req.query;

    if (!access_token) {
      return res.status(400).json({ error: 'access_token required' });
    }

    const response = await axios.get(
      'https://api.linkedin.com/v2/me',
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'X-Restli-Protocol-Version': '2.0.0'
        },
        params: {
          projection: '(id,firstName,lastName,profilePicture(displayImage~:playableStreams))'
        }
      }
    );

    res.json({ profile: response.data });
  } catch (error) {
    console.error('LinkedIn profile error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get profile' });
  }
});

// 4. Получить сообщения (conversations)
router.get('/conversations', async (req, res) => {
  try {
    const { access_token } = req.query;

    if (!access_token) {
      return res.status(400).json({ error: 'access_token required' });
    }

    // LinkedIn Messaging API
    const response = await axios.get(
      'https://api.linkedin.com/v2/messageTemplates',
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'X-Restli-Protocol-Version': '2.0.0'
        }
      }
    );

    res.json({ conversations: response.data.elements });
  } catch (error) {
    console.error('LinkedIn conversations error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get conversations' });
  }
});

// 5. Отправить сообщение
router.post('/send', async (req, res) => {
  try {
    const { access_token, recipientId, message } = req.body;

    if (!access_token || !recipientId || !message) {
      return res.status(400).json({ error: 'access_token, recipientId and message required' });
    }

    // Создание conversation
    const response = await axios.post(
      'https://api.linkedin.com/v2/messages',
      {
        recipients: [
          `urn:li:person:${recipientId}`
        ],
        content: {
          'com.linkedin.voyager.messaging.create.MessageCreate': {
            attributedBody: {
              text: message,
              attributes: []
            },
            attachments: [],
            webhookUrl: ''
          }
        },
        subtype: 'NONE'
      },
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'X-Restli-Protocol-Version': '2.0.0',
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ success: true, messageId: response.data });
  } catch (error) {
    console.error('LinkedIn send error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// 6. Обновить токен (refresh)
router.post('/refresh-token', async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({ error: 'refresh_token required' });
    }

    const response = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    res.json({
      success: true,
      ...response.data
    });
  } catch (error) {
    console.error('LinkedIn refresh error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to refresh token' });
  }
});

// 7. Webhook для событий (если поддерживается)
router.post('/webhook', (req, res) => {
  const { event, payload } = req.body;

  console.log('LinkedIn webhook received:', event);
  
  // TODO: Обработать событие
  res.status(200).json({ ok: true });
});

module.exports = router;
