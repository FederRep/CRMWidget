const axios = require('axios')
const eventBus = require('../../core/events/eventBus')
const EVENTS = require('../../core/events/eventTypes')
const store = require('../../storage/memory')

eventBus.on(EVENTS.MESSAGE_OUTGOING, async msg => {
  if (msg.channel !== 'telegram') return

  try {
    const conversation = store.conversations.find(
      c => c.id === msg.conversationId
    )

    if (!conversation) {
      console.error('Conversation not found')
      return
    }

    const chatId = conversation.clientId

    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text: msg.text
      }
    )

    console.log('Telegram response:', response.data)

    msg.status = 'sent'
  } catch (err) {
    console.error(
      'Telegram send error:',
      err.response?.data || err.message
    )
  }
})
