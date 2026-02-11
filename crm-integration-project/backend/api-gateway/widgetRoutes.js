const express = require('express')
const router = express.Router()

// Сервисы
const { 
  createOutgoingMessage,
  getMessagesByConversationId 
} = require('../core/messages/message.service')

const { 
  getConversationById 
} = require('../core/conversations/conversation.service')

const { 
  sendTelegramMessage 
} = require('../adapters/telegram/telegram.sender')

/**
 * ===============================
 * Отправка сообщения в Telegram
 * ===============================
 */
router.post('/send', async (req, res) => {
  try {
    const { conversationId, text } = req.body

    if (!conversationId || !text) {
      return res.status(400).json({ error: 'conversationId and text required' })
    }

    // Получаем диалог
    const conversation = getConversationById(conversationId)

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' })
    }

    // Отправляем в Telegram
    await sendTelegramMessage(conversation.externalId, text)

    // Сохраняем исходящее сообщение
    createOutgoingMessage(conversationId, 'telegram', text)

    res.json({ ok: true })

  } catch (error) {
    console.error('Send error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * ===============================
 * Получение истории сообщений
 * ===============================
 */
router.get('/messages/:conversationId', (req, res) => {
  try {
    const { conversationId } = req.params

    const messages = getMessagesByConversationId(conversationId)

    res.json(messages)

  } catch (error) {
    console.error('Fetch messages error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
