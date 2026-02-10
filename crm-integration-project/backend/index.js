require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const telegramWebhook = require('./adapters/telegram/telegram.webhook')
const widgetRoutes = require('./api-gateway/widgetRoutes')

require('./adapters/telegram/telegram.sender')   // чтобы подписка на события заработала
require('./workers/amo.worker')                 // чтобы события слушались
require('./realtime/wsServer')                  // чтобы WebSocket стартовал

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
