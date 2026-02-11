require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// storage (для debug)
const store = require('./crm-integration-project/backend/storage/memory')

// Routes
const telegramWebhook = require('./crm-integration-project/backend/adapters/telegram/telegram.webhook')
const widgetRoutes = require('./crm-integration-project/backend/api-gateway/widgetRoutes')

// Инициализация событий
require('./crm-integration-project/backend/adapters/telegram/telegram.sender')
require('./crm-integration-project/backend/workers/amo.worker')
require('./crm-integration-project/backend/realtime/wsServer')

const app = express()

app.use(cors())
app.use(bodyParser.json())

// ===== Telegram Webhook =====
app.use('/webhook', telegramWebhook)

// ===== Widget API =====
app.use('/widget', widgetRoutes)

// ===== Debug Route =====
app.get('/debug', (req, res) => {
  res.json(store)
})

// ===== Root =====
app.get('/', (req, res) => {
  res.send('CRM Messenger Running 🚀')
})

app.listen(3000, () => {
  console.log('HTTP server started on 3000')
})
