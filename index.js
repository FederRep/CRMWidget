require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const telegramWebhook = require('./crm-integration-project/backend/adapters/telegram/telegram.webhook')
const widgetRoutes = require('./crm-integration-project/backend/api-gateway/widgetRoutes')

require('./crm-integration-project/backend/adapters/telegram/telegram.sender')   // чтобы подписка на события заработала
require('./crm-integration-project/backend/workers/amo.worker')                 // чтобы события слушались
require('./crm-integration-project/backend/realtime/wsServer')                  // чтобы WebSocket стартовал

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Webhook Telegram
app.use('/webhook', telegramWebhook)

// API для iframe
app.use('/widget', widgetRoutes)

app.get('/', (req, res) => {
  res.send('CRM Messenger Running 🚀')
})

app.listen(3000, () => {
  console.log('HTTP server started on 3000')
})
