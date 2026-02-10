class Conversation {
  constructor({ id, amoEntityId, clientId }) {
    this.id = id
    this.amoEntityId = amoEntityId
    this.clientId = clientId
    this.status = 'open'
    this.lastMessageAt = new Date()
  }
}

module.exports = Conversation
