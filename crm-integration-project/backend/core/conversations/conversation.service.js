const store = require('../../storage/memory')
const Conversation = require('./conversation.model')

function getOrCreateConversation(amoEntityId, clientId) {
  let conv = store.conversations.find(c => c.amoEntityId === amoEntityId)
  if (!conv) {
    conv = new Conversation({
      id: Date.now(),
      amoEntityId,
      clientId
    })
    store.conversations.push(conv)
  }
  return conv
}

module.exports = { getOrCreateConversation }
