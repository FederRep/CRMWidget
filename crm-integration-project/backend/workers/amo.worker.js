const eventBus = require('../core/events/eventBus');
const EVENTS = require('../core/events/eventTypes');

eventBus.on(EVENTS.MESSAGE_INCOMING, async (msg) => {
  if (msg.channel === 'telegram') {
    console.log('← amoCRM → Telegram:', msg.text);

    // ❗️Вызываем событие, которое будет обрабатывать telegram.sender.js
    eventBus.emit(EVENTS.MESSAGE_OUTGOING, {
      ...msg,
      status: 'pending'
    });
  }
});