const express = require('express')
const router = express.Router()
const { createIncomingMessage } = require('../../core/messages/message.service')
const { getOrCreateConversation } = require('../../core/conversations/conversation.service')

router.post('/', (req, res) => {
  console.log('Telegram update:', req.body)

  const text = req.body.message?.text
  const chatId = req.body.message?.chat.id
  if (!text) return res.sendStatus(200)

  const conversation = getOrCreateConversation(chatId, chatId)
  createIncomingMessage(conversation.id, 'telegram', text)

  res.sendStatus(200)
})


module.exports = router
