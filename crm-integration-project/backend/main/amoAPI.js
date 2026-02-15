const axios = require('axios');

class AmoAPI {
  constructor(baseDomain, token) {
    this.baseDomain = baseDomain;
    this.token = token;
    this.headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
  }

  // Создать контакт
  async createContact(firstName, phone = null, email = null) {
    const data = {
      add: [
        {
          name: firstName,
          custom_fields_values: []
        }
      ]
    };

    try {
      const response = await axios.post(`${this.baseDomain}/api/v4/contacts`, data, {
        headers: this.headers
      });
      return response.data._embedded.contacts[0];
    } catch (err) {
      console.error('Create contact error:', err.response?.data || err.message);
      return null;
    }
  }

  // Создать сделку
  async createLead(name, contactId) {
    const data = {
      add: [
        {
          name: name,
          contacts: [{ id: contactId }]
        }
      ]
    };

    try {
      const response = await axios.post(`${this.baseDomain}/api/v4/leads`, data, {
        headers: this.headers
      });
      return response.data._embedded.leads[0];
    } catch (err) {
      console.error('Create lead error:', err.response?.data || err.message);
      return null;
    }
  }

  // Добавить заметку к контакту или сделке
  async addNote(entityType, entityId, text) {
    const data = {
      add: [
        {
          entity_id: entityId,
          note_type: 'common',
          text: text
        }
      ]
    };

    try {
      const response = await axios.post(`${this.baseDomain}/api/v4/${entityType}/notes`, data, {
        headers: this.headers
      });
      return response.data._embedded.notes[0];
    } catch (err) {
      console.error('Add note error:', err.response?.data || err.message);
      return null;
    }
  }
}

module.exports = AmoAPI;

