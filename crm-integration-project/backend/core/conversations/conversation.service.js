const store = require('../../storage/memory')
const Conversation = require('./conversation.model')

function getOrCreateConversation(amoEntityId, clientId) {
  let conv = store.conversations.find(c => c.amoEntityId === amoEntityId)

  if (!conv) {
    conv = new Conversation({
      id: Date.now(),
      amoEntityId,
      clientId,
      externalId: clientId // 👈 добавляем для Telegram chatId
    })

    store.conversations.push(conv)
  }

  return conv
}

function getConversationById(id) {
  return store.conversations.find(c => c.id == id)
}

module.exports = {
  getOrCreateConversation,
  getConversationById
}
