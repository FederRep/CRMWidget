# API Documentation - Corsa Messenger Integrator

## 📡 Available Platforms

### 1. Instagram API
Base URL: `/api/instagram`

#### Endpoints:

**GET /api/instagram/accounts**
- Get Instagram Business accounts
- Query params: `access_token`

**GET /api/instagram/messages/:igAccountId**
- Get Instagram conversations
- Query params: `access_token`

**POST /api/instagram/send**
- Send Instagram message
- Body: `{ access_token, recipientId, message }`

**POST /api/instagram/webhook**
- Receive incoming messages (Facebook webhook)

**GET /api/instagram/webhook**
- Webhook verification

---

### 2. Avito API
Base URL: `/api/avito`

#### Endpoints:

**GET /api/avito/chats**
- Get Avito chats
- Query params: `access_token`, `userId`

**GET /api/avito/chats/:chatId/messages**
- Get chat messages
- Query params: `access_token`

**POST /api/avito/send**
- Send Avito message
- Body: `{ access_token, chatId, message }`

**GET /api/avito/profile**
- Get user profile
- Query params: `access_token`

**POST /api/avito/webhook**
- Receive new messages

---

### 3. LinkedIn API
Base URL: `/api/linkedin`

#### Endpoints:

**GET /api/linkedin/auth**
- Start LinkedIn OAuth
- Returns: `{ authUrl }`

**GET /api/linkedin/callback**
- OAuth callback handler
- Query params: `code`, `state`

**GET /api/linkedin/profile**
- Get user profile
- Query params: `access_token`

**GET /api/linkedin/conversations**
- Get LinkedIn conversations
- Query params: `access_token`

**POST /api/linkedin/send**
- Send LinkedIn message
- Body: `{ access_token, recipientId, message }`

**POST /api/linkedin/refresh-token**
- Refresh access token
- Body: `{ refresh_token }`

**POST /api/linkedin/webhook**
- Receive LinkedIn events

---

## 🔧 Setup

### Environment Variables (.env)

```env
# Instagram
INSTAGRAM_CLIENT_ID=your_instagram_client_id
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret
INSTAGRAM_WEBHOOK_TOKEN=your_webhook_verification_token

# Avito
AVITO_CLIENT_ID=your_avito_client_id
AVITO_CLIENT_SECRET=your_avito_client_secret

# LinkedIn
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_REDIRECT_URI=https://corsa-crm.ru/api/linkedin/callback
```

---

## 📝 Examples

### Send Instagram Message
```bash
curl -X POST https://corsa-crm.ru/api/instagram/send \
  -H "Content-Type: application/json" \
  -d '{
    "access_token": "IG_TOKEN",
    "recipientId": "123456789",
    "message": "Hello from Corsa CRM!"
  }'
```

### Send Avito Message
```bash
curl -X POST https://corsa-crm.ru/api/avito/send \
  -H "Content-Type: application/json" \
  -d '{
    "access_token": "AVITO_TOKEN",
    "chatId": "chat_123",
    "message": "Hello from Corsa CRM!"
  }'
```

### LinkedIn OAuth Flow
```bash
# 1. Get auth URL
curl https://corsa-crm.ru/api/linkedin/auth

# 2. After authorization, callback will return tokens
```

---

## 🔄 Webhooks Setup

### Instagram (Facebook Developers)
1. Go to Facebook Developers → App → Webhooks
2. Add subscription for `instagram` object
3. Set callback URL: `https://corsa-crm.ru/api/instagram/webhook`
4. Set verify token from `.env`

### Avito
1. Go to Avito Developer Portal
2. Configure webhook URL: `https://corsa-crm.ru/api/avito/webhook`

### LinkedIn
1. Go to LinkedIn Developer Portal
2. Configure webhook URL: `https://corsa-crm.ru/api/linkedin/webhook`
