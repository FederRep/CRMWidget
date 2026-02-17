// amoAPI.js

const axios = require('axios');

const axiosInstance = axios.create({
  timeout: 10000
});

class AmoAPI {
  constructor(subdomain, token, db, logger) {
    this.subdomain = subdomain;              // podshivalovvfyodor
    this.baseUrl = `https://${subdomain}.amocrm.ru`; // полный URL
    this.token = token;
    this.db = db;
    this.logger = logger;
  }

  // =============================
  // Обновление токена
  // =============================
  async refreshToken(refreshToken, clientId, clientSecret, redirectUri) {
    try {
      this.logger.info('Refreshing token...');

      const response = await axiosInstance.post(
        `${this.baseUrl}/oauth2/access_token`,
        {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          redirect_uri: redirectUri
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      const { access_token, refresh_token, expires_in } = response.data;

      this.token = access_token;

      this.logger.info('Token refreshed successfully');

      return { access_token, refresh_token, expires_in };

    } catch (err) {
      this.logger.error('Refresh token error', {
        error: err.response?.data || err.message
      });
      throw err;
    }
  }

  // =============================
  // Универсальный запрос к amoCRM
  // =============================
  async makeRequest(method, endpoint, data = null) {
    try {
      this.logger.info('Making request', { method, endpoint });

      const response = await axiosInstance({
        method,
        url: `${this.baseUrl}${endpoint}`,
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        data
      });

      return response.data;

    } catch (err) {

      // 🔁 Если токен истёк
      if (err.response?.status === 401) {
        this.logger.warn('Token expired, refreshing...');

        const user = await new Promise((resolve, reject) => {
          this.db.get(
            'SELECT * FROM users WHERE amo_subdomain = ?',
            [this.subdomain], // ← чистый субдомен!
            (err, row) => {
              if (err) return reject(err);
              if (!row) {
                this.logger.error('No user found for subdomain', {
                  subdomain: this.subdomain
                });
                return reject(new Error('No user found for subdomain'));
              }
              resolve(row);
            }
          );
        });

        const newTokens = await this.refreshToken(
          user.refresh_token,
          process.env.CLIENT_ID,
          process.env.CLIENT_SECRET,
          process.env.REDIRECT_URI
        );

        const expiresAt =
          Math.floor(Date.now() / 1000) + newTokens.expires_in;

        await new Promise((resolve, reject) => {
          this.db.run(
            `UPDATE users
             SET access_token = ?, refresh_token = ?, expires_at = ?
             WHERE amo_subdomain = ?`,
            [
              newTokens.access_token,
              newTokens.refresh_token,
              expiresAt,
              this.subdomain
            ],
            (err) => {
              if (err) reject(err);
              else resolve();
            }
          );
        });

        this.token = newTokens.access_token;

        this.logger.info('Retrying request after token refresh');

        return this.makeRequest(method, endpoint, data);
      }

      this.logger.error('Request error', {
        error: err.response?.data || err.message,
        method,
        endpoint
      });

      throw err;
    }
  }

  // =============================
  // Создание контакта
  // =============================
  async createContact(name) {
    const data = [{ name }];

    const response = await this.makeRequest(
      'POST',
      '/api/v4/contacts',
      data
    );

    return response._embedded.contacts[0];
  }

  // =============================
  // Создание сделки
  // =============================
  async createLead(name, contactId) {
    const data = [
      {
        name,
        contacts: [{ id: contactId }]
      }
    ];

    const response = await this.makeRequest(
      'POST',
      '/api/v4/leads',
      data
    );

    return response._embedded.leads[0];
  }

  // =============================
  // Добавление заметки
  // =============================
  async addNote(entityType, entityId, text) {
    const data = [
      {
        entity_id: entityId,
        note_type: 'common',
        params: { text }
      }
    ];

    const response = await this.makeRequest(
      'POST',
      `/api/v4/${entityType}/notes`,
      data
    );

    return response._embedded.notes[0];
  }

  // =============================
  // Проверка подключения
  // =============================
  async checkConnection() {
    try {
      await this.makeRequest('GET', '/api/v4/account');
      this.logger.info('Connected to amoCRM successfully');
      return true;
    } catch (err) {
      this.logger.error('Failed to connect to amoCRM', {
        error: err.message
      });
      return false;
    }
  }
}

module.exports = AmoAPI;

