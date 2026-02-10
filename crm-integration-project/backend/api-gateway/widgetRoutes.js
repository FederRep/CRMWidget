const express = require('express')
const router = express.Router()
const auth = require('./authMiddleware')
const { createOutgoingMessage } = require('../core/messages/message.service')

router.post('/send', auth, (req, res) => {
  const { conversationId, text } = req.body
  createOutgoingMessage(conversationId, 'telegram', text)
  res.json({ ok: true })
})

module.exports = router
