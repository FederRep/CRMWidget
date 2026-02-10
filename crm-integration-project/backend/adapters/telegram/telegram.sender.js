const axios = require('axios')
const eventBus = require('../../core/events/eventBus')
const EVENTS = require('../../core/events/eventTypes')

eventBus.on(EVENTS.MESSAGE_OUTGOING, async msg => {
  if (msg.channel !== 'telegram') return

  await axios.post(
    `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
    {
      chat_id: msg.conversationId,
      text: msg.text
    }
  )

  msg.status = 'sent'
})
