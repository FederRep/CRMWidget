const WebSocket = require('ws')
const store = require('../storage/memory')
const eventBus = require('../core/events/eventBus')
const EVENTS = require('../core/events/eventTypes')

const wss = new WebSocket.Server({ port: 4000 })

wss.on('connection', ws => {
  ws.on('message', msg => {
    const { conversationId } = JSON.parse(msg)
    ws.conversationId = conversationId
  })
})

eventBus.on(EVENTS.MESSAGE_INCOMING, msg => {
  wss.clients.forEach(ws => {
    if (ws.conversationId === msg.conversationId) {
      ws.send(JSON.stringify(msg))
    }
  })
})
