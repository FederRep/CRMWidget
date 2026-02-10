const eventBus = require('../core/events/eventBus')
const EVENTS = require('../core/events/eventTypes')

eventBus.on(EVENTS.MESSAGE_INCOMING, async msg => {
  console.log('→ push to amoCRM:', msg.text)
  // axios.post /notes
})
