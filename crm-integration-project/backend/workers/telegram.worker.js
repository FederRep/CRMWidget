// telegram.worker.js
require('dotenv').config();
const express = require('express');
const eventBus = require('../core/events/eventBus');
const EVENTS = require('../core/events/eventTypes');
const store = require('../storage/memory');

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const update = req.body;

  if (update.message && update.message.text) {
    const chatId = update.message.chat.id;
    const text = update.message.text;

    // Найти или создать conversation
    
    let conversation = store.conversations.find(c => c.clientId === String(chatId));

    if (!conversation) {
      conversation = {
        id: `conv_${Date.now()}`,
        clientId: String(chatId),
        contactId: null, // Пока нет связи с amoCRM
        channel: 'telegram'
      };
      store.conversations.push(conversation);
    }

    // ❗️Отправить событие в amoCRM
    eventBus.emit(EVENTS.MESSAGE_INCOMING, {
      channel: 'telegram',
      conversationId: conversation.id,
      text,
      timestamp: Date.now()
    });

    console.log('← Telegram → Event:', text);
  }

  res.status(200).send('OK');
});

app.listen(3000, () => console.log('Telegram worker listening on port 3000'));