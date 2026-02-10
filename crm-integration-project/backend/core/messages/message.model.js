class Message {
  constructor({ id, conversationId, channel, text, direction }) {
    this.id = id
    this.conversationId = conversationId
    this.channel = channel
    this.text = text
    this.direction = direction
    this.status = 'queued'
    this.createdAt = new Date()
  }
}

module.exports = Message
