require('dotenv').config();

const express = require('express');
const axios = require('axios');
const EventEmitter = require('events');

// Подключаем amoAPI
const AmoAPI = require('./amoAPI');
console.log('AmoAPI module loaded?', typeof AmoAPI);
console.log('Subdomain:', process.env.AMOCRM_SUBDOMAIN);
console.log('Token present?', !!process.env.AMOCRM_TOKEN);

const amo = new AmoAPI(process.env.AMOCRM_SUBDOMAIN, process.env.AMOCRM_TOKEN);

console.log('Amo instance created?', !!amo);

console.log('1. dotenv loaded, TOKEN =', process.env.TELEGRAM_TOKEN);

// Общий eventBus
const eventBus = new EventEmitter();

const store = {
  conversations: [],
  messages: []
};

// Telegram Worker (webhook)
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('2. Webhook called with body:', req.body);

  const update = req.body;

  if (update.message && update.message.text) {
    const chatId = update.message.chat.id;
    const text = update.message.text;

    console.log('3. Received message from chatId:', chatId, 'text:', text);

    let conversation = store.conversations.find(c => c.clientId === String(chatId));

    if (!conversation) {
      conversation = {
        id: `conv_${Date.now()}`,
        clientId: String(chatId),
        contactId: null,
        leadId: null, // Добавим leadId
        channel: 'telegram'
      };
      store.conversations.push(conversation);
      console.log('4. New conversation created:', conversation);
    } else {
      console.log('4. Found existing conversation:', conversation);
    }

    console.log('5. Emitting message.incoming event');
    eventBus.emit('message.incoming', {
      channel: 'telegram',
      conversationId: conversation.id,
      text,
      timestamp: Date.now()
    });

    console.log('← Telegram → Event:', text);
  }

  res.status(200).send('OK');
});

// amo Worker (слушает incoming, вызывает outgoing)
console.log('6. Registering message.incoming listener');

eventBus.on('message.incoming', async (msg) => {
  console.log('7. Received message.incoming event:', msg);

  if (msg.channel === 'telegram') {
    console.log('8. Channel is telegram, checking amo instance...');
    console.log('Amo instance exists?', !!amo);
    console.log('Amo methods available?', typeof amo.createContact, typeof amo.createLead, typeof amo.addNote);

    // Найти или создать контакт и сделку в amoCRM
    let conversation = store.conversations.find(c => c.id === msg.conversationId);

    if (!conversation.contactId) {
      console.log('9. Contact does not exist, creating...');
      const contact = await amo.createContact('Telegram User');
      console.log('10. Contact created:', contact);

      if (contact) {
        conversation.contactId = contact.id;

        console.log('11. Creating lead...');
        const lead = await amo.createLead('Telegram Chat', contact.id);
        console.log('12. Lead created:', lead);

        if (lead) {
          conversation.leadId = lead.id;
        }

        console.log('13. Adding note...');
        await amo.addNote('contacts', contact.id, `Telegram message: ${msg.text}`);
        console.log('14. Note added.');
      }
    } else {
      console.log('9. Contact exists, adding note only...');
      await amo.addNote('contacts', conversation.contactId, `Telegram message: ${msg.text}`);
      console.log('10. Note added.');
    }

    console.log('8. Channel is telegram, forwarding to outgoing');
    eventBus.emit('message.outgoing', {
      ...msg,
      status: 'pending'
    });
  } else {
    console.log('8. Channel is NOT telegram, skipping');
  }
});

// Telegram Sender (отправляет в Telegram)
console.log('10. Registering message.outgoing listener');

eventBus.on('message.outgoing', async (msg) => {
  console.log('11. Received message.outgoing event:', msg);

  if (msg.channel !== 'telegram') {
    console.log('12. Channel is NOT telegram, skipping');
    return;
  }

  console.log('12. Channel is telegram, attempting to send');

  try {
    const conversation = store.conversations.find(c => c.id === msg.conversationId);

    if (!conversation) {
      console.error('Conversation not found');
      return;
    }

    const chatId = conversation.clientId;

    console.log(`13. Sending message to chatId: ${chatId}, text: ${msg.text}`);

    // ❗️ИСПРАВЛЕНО: убраны лишние пробелы
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text: msg.text
      }
    );

    console.log('14. Telegram response:', response.data);
    msg.status = 'sent';
  } catch (err) {
    console.error('15. Telegram send error:', err.response?.data || err.message);
  }
});

app.listen(3000, () => console.log('App listening on port 3000'));