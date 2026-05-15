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
      unread_count INTEGER DEFAULT 0,
      last_message_text TEXT,
      last_message_direction TEXT,
      last_message_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Миграция для старых БД без amo_subdomain
  db.run(`ALTER TABLE conversations ADD COLUMN amo_subdomain TEXT`, () => {
    // Игнорируем ошибку duplicate column для уже обновленной схемы
  });
  db.run(`ALTER TABLE conversations ADD COLUMN telegram_user_id TEXT`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN business_connection_id TEXT`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN unread_count INTEGER DEFAULT 0`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN last_message_text TEXT`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN last_message_direction TEXT`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN last_message_at DATETIME`, () => {});
  db.run(`ALTER TABLE conversations ADD COLUMN display_title TEXT`, () => {});

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
      status TEXT DEFAULT 'sent',
      error_text TEXT,
      sender_name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (conversation_id) REFERENCES conversations(id)
    )
  `);
  db.run(`ALTER TABLE messages ADD COLUMN status TEXT DEFAULT 'sent'`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN error_text TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN sender_name TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN external_message_id TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN source_platform TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN media_type TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN media_url TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN mime_type TEXT`, () => {});
  db.run(`ALTER TABLE messages ADD COLUMN media_duration INTEGER`, () => {});

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

  // Очередь задач (ingress/outbound workers)
  db.run(`
    CREATE TABLE IF NOT EXISTS queue_jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      queue_name TEXT NOT NULL,
      job_type TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      idempotency_key TEXT,
      priority INTEGER DEFAULT 5,
      status TEXT DEFAULT 'queued',
      attempts INTEGER DEFAULT 0,
      max_attempts INTEGER DEFAULT 5,
      available_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      locked_by TEXT,
      locked_at DATETIME,
      last_error TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`ALTER TABLE queue_jobs ADD COLUMN idempotency_key TEXT`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN priority INTEGER DEFAULT 5`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN status TEXT DEFAULT 'queued'`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN attempts INTEGER DEFAULT 0`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN max_attempts INTEGER DEFAULT 5`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN available_at DATETIME DEFAULT CURRENT_TIMESTAMP`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN locked_by TEXT`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN locked_at DATETIME`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN last_error TEXT`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP`, () => {});
  db.run(`ALTER TABLE queue_jobs ADD COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP`, () => {});
  db.run(`CREATE INDEX IF NOT EXISTS idx_queue_jobs_pick ON queue_jobs(queue_name, status, available_at, priority DESC, id ASC)`);
  db.run(`CREATE UNIQUE INDEX IF NOT EXISTS idx_queue_jobs_idempotency ON queue_jobs(idempotency_key) WHERE idempotency_key IS NOT NULL`);

  // Dead-letter queue
  db.run(`
    CREATE TABLE IF NOT EXISTS queue_dead_letters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      queue_name TEXT NOT NULL,
      job_type TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      idempotency_key TEXT,
      attempts INTEGER DEFAULT 0,
      max_attempts INTEGER DEFAULT 0,
      last_error TEXT,
      moved_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`CREATE INDEX IF NOT EXISTS idx_queue_dead_letters_queue ON queue_dead_letters(queue_name, moved_at DESC)`);

  // Идемпотентность обработанных апдейтов
  db.run(`
    CREATE TABLE IF NOT EXISTS processed_idempotency (
      key TEXT PRIMARY KEY,
      scope TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`CREATE INDEX IF NOT EXISTS idx_processed_idempotency_scope ON processed_idempotency(scope, created_at DESC)`);
});

module.exports = db;
