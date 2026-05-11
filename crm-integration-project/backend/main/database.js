const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'crm_integration.db');
const db = new sqlite3.Database(dbPath);

// Инициализация таблиц
db.serialize(() => {
  // Таблица пользователей amoCRM (для OAuth)
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amo_subdomain TEXT UNIQUE NOT NULL,
      access_token TEXT NOT NULL,
      refresh_token TEXT NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица пользователей SaaS (для авторизации)
  db.run(`
    CREATE TABLE IF NOT EXISTS users_accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      amo_subdomain TEXT NOT NULL,
      trial_ends_at TIMESTAMP,
      subscription_status TEXT DEFAULT 'trial',
      subscription_plan TEXT,
      subscription_ends_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица чатов Telegram ↔ amoCRM
  db.run(`
    CREATE TABLE IF NOT EXISTS conversations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      telegram_chat_id TEXT UNIQUE NOT NULL,
      telegram_user_id TEXT,
      business_connection_id TEXT,
      amo_contact_id INTEGER,
      amo_lead_id INTEGER,
      amo_subdomain TEXT,
      channel TEXT DEFAULT 'telegram',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Миграция для старых БД без amo_subdomain
  db.run(`ALTER TABLE conversations ADD COLUMN amo_subdomain TEXT`, () => {
    // Игнорируем ошибку duplicate column для уже обновленной схемы
  });
  db.run(`ALTER TABLE conversations ADD COLUMN telegram_user_id TEXT`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN business_connection_id TEXT`, () => {});

  db.run(`
    CREATE TABLE IF NOT EXISTS telegram_business_connections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_connection_id TEXT UNIQUE NOT NULL,
      amo_subdomain TEXT,
      user_chat_id TEXT,
      user_username TEXT,
      user_first_name TEXT,
      is_enabled INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица сообщений
  db.run(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      conversation_id INTEGER NOT NULL,
      text TEXT NOT NULL,
      direction TEXT CHECK(direction IN ('incoming', 'outgoing')) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (conversation_id) REFERENCES conversations(id)
    )
  `);

  // Таблица VK пользователей
  db.run(`
    CREATE TABLE IF NOT EXISTS vk_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vk_user_id TEXT UNIQUE NOT NULL,
      access_token TEXT,
      expires_at INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица LinkedIn пользователей
  db.run(`
    CREATE TABLE IF NOT EXISTS linkedin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      linkedin_id TEXT UNIQUE NOT NULL,
      access_token TEXT NOT NULL,
      expires_at INTEGER NOT NULL,
      email TEXT,
      first_name TEXT,
      last_name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // MTProto (Telegram «связанные устройства») — StringSession по поддомену amo
  db.run(`
    CREATE TABLE IF NOT EXISTS telegram_mtproto_sessions (
      amo_subdomain TEXT PRIMARY KEY NOT NULL,
      session_string TEXT NOT NULL,
      telegram_user_id TEXT NOT NULL,
      username TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Таблица сессий авторизации
  db.run(`
    CREATE TABLE IF NOT EXISTS auth_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT UNIQUE NOT NULL,
      platform TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      telegram_id TEXT,
      telegram_username TEXT,
      telegram_first_name TEXT,
      error TEXT,
      expires_at TIMESTAMP NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
