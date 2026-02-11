const store = require('../../storage/memory')
const Message = require('./message.model')
const eventBus = require('../events/eventBus')
const EVENTS = require('../events/eventTypes')

function createOutgoingMessage(conversationId, channel, text) {
  const msg = new Message({
    id: Date.now(),
    conversationId,
    channel,
    text,
    direction: 'out'
  })

  store.messages.push(msg)

  eventBus.emit(EVENTS.MESSAGE_OUTGOING, msg)
  return msg
}

function createIncomingMessage(conversationId, channel, text) {
  const msg = new Message({
    id: Date.now(),
    conversationId,
    channel,
    text,
    direction: 'in'
  })

  store.messages.push(msg)

  eventBus.emit(EVENTS.MESSAGE_INCOMING, msg)
  return msg
}

function getMessagesByConversationId(conversationId) {
  return store.messages.filter(m => m.conversationId == conversationId)
}

module.exports = {
  createOutgoingMessage,
  createIncomingMessage,
  getMessagesByConversationId
}
