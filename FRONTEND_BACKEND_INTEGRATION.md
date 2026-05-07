# Frontend-Backend Integration Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Backend
cd crm-integration-project/backend/main
npm install

# Frontend
cd crm-integration-project/frontend
npm install
```

### 2. Configure Environment Variables

**Backend (.env):**
```env
NODE_ENV=production
PORT=3000
JWT_SECRET=your-secret-key
CLIENT_ID=your_amoCRM_client_id
CLIENT_SECRET=your_amoCRM_client_secret
REDIRECT_URI=https://corsa-crm.ru/api/auth/callback
TELEGRAM_TOKEN=your_telegram_bot_token

# Instagram
INSTAGRAM_CLIENT_ID=your_instagram_client_id
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret
INSTAGRAM_WEBHOOK_TOKEN=your_webhook_token

# Avito
AVITO_CLIENT_ID=your_avito_client_id
AVITO_CLIENT_SECRET=your_avito_client_secret

# LinkedIn
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_REDIRECT_URI=https://corsa-crm.ru/api/linkedin/callback
```

**Frontend (.env.local for development):**
```env
VITE_API_URL=http://localhost:3000/api
```

**Frontend (.env for production):**
```env
VITE_API_URL=https://corsa-crm.ru/api
```

### 3. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd crm-integration-project/backend/main
node app.js
```

**Terminal 2 - Frontend:**
```bash
cd crm-integration-project/frontend
npm run dev
```

Frontend will be available at: http://localhost:5173
Backend API at: http://localhost:3000

### 4. Build for Production

```bash
cd crm-integration-project/frontend
npm run build
```

The built files will be in `frontend/dist/` and served by the backend.

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user profile

### amoCRM
- `GET /api/oauth?subdomain=xxx` - Start OAuth
- `GET /api/callback` - OAuth callback
- `POST /api/auth/refresh` - Refresh token

### Telegram
- `GET /api/auth/telegram` - Start Telegram auth
- `POST /api/telegram/send` - Send message

### VK
- `GET /api/auth/vk` - Start VK auth

### Instagram
- `GET /api/instagram/accounts` - Get accounts
- `GET /api/instagram/messages/:id` - Get messages
- `POST /api/instagram/send` - Send message
- `POST /api/instagram/webhook` - Webhook handler

### Avito
- `GET /api/avito/chats` - Get chats
- `GET /api/avito/chats/:id/messages` - Get messages
- `POST /api/avito/send` - Send message
- `GET /api/avito/profile` - Get profile

### LinkedIn
- `GET /api/linkedin/auth` - Get auth URL
- `GET /api/linkedin/callback` - OAuth callback
- `GET /api/linkedin/profile` - Get profile
- `POST /api/linkedin/send` - Send message
- `POST /api/linkedin/refresh-token` - Refresh token

### Bulk Messaging
- `GET /api/templates` - Get message templates
- `POST /api/messages/send-bulk` - Send bulk messages
- `GET /api/messages/send-bulk/:jobId` - Get sending status

## 🔗 How Frontend Connects to Backend

1. **API Client** (`frontend/src/api.js`)
   - Centralized API client
   - Automatic token handling
   - Error handling

2. **Auth Context** (`frontend/src/AuthContext.jsx`)
   - Manages authentication state
   - Login/Register/Logout
   - Token persistence

3. **Environment Variables**
   - `VITE_API_URL` - Backend URL
   - Different URLs for dev/prod

4. **Vite Proxy** (development only)
   - Proxies `/api` requests to backend
   - Avoids CORS issues during development

## 📝 Usage Example

```javascript
import { api } from './api'
import { useAuth } from './AuthContext'

// Login
const { login } = useAuth()
await login('user@example.com', 'password')

// Send Telegram message
await api.sendTelegramMessage('chat_id', 'Hello!')

// Get Instagram accounts
const accounts = await api.getInstagramAccounts(access_token)

// Send bulk message
const result = await api.sendBulkMessage({
  platform: 'telegram',
  message: 'Hello!',
  recipients: [{ contactId: '123' }]
})
```

## 🔧 Troubleshooting

**CORS errors in development:**
- Make sure Vite proxy is configured
- Backend should have CORS enabled

**API not responding:**
- Check backend is running on port 3000
- Verify VITE_API_URL in .env.local

**Token errors:**
- Check JWT_SECRET matches in backend
- Clear localStorage and re-login
