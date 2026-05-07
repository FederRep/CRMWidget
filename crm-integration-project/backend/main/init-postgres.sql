-- ============================================================
-- PostgreSQL Initialization Script for CRM Integration
-- ============================================================

-- Create database (run this as superuser if needed)
-- CREATE DATABASE crm_integration;

-- Connect to database
-- \c crm_integration;

-- ============================================================
-- Table: users (amoCRM OAuth users)
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    amo_subdomain TEXT UNIQUE NOT NULL,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Table: users_accounts (SaaS user accounts)
-- ============================================================
CREATE TABLE IF NOT EXISTS users_accounts (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    amo_subdomain TEXT NOT NULL,
    trial_ends_at TIMESTAMP,
    subscription_status TEXT DEFAULT 'trial',
    subscription_plan TEXT,
    subscription_ends_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Table: conversations (Telegram ↔ amoCRM chats)
-- ============================================================
CREATE TABLE IF NOT EXISTS conversations (
    id SERIAL PRIMARY KEY,
    telegram_chat_id TEXT UNIQUE NOT NULL,
    amo_contact_id INTEGER,
    amo_lead_id INTEGER,
    channel TEXT DEFAULT 'telegram',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Table: messages
-- ============================================================
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    conversation_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    direction TEXT CHECK(direction IN ('incoming', 'outgoing')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);

-- ============================================================
-- Table: vk_users (VK OAuth users)
-- ============================================================
CREATE TABLE IF NOT EXISTS vk_users (
    id SERIAL PRIMARY KEY,
    vk_user_id TEXT UNIQUE NOT NULL,
    access_token TEXT,
    expires_at INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Table: linkedin_users (LinkedIn OAuth users)
-- ============================================================
CREATE TABLE IF NOT EXISTS linkedin_users (
    id SERIAL PRIMARY KEY,
    linkedin_id TEXT UNIQUE NOT NULL,
    access_token TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    email TEXT,
    first_name TEXT,
    last_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Table: auth_sessions (for QR auth and sessions)
-- ============================================================
CREATE TABLE IF NOT EXISTS auth_sessions (
    id SERIAL PRIMARY KEY,
    session_id TEXT UNIQUE NOT NULL,
    platform TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    telegram_id TEXT,
    telegram_username TEXT,
    telegram_first_name TEXT,
    error TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Create indexes for better performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_users_accounts_email ON users_accounts(email);
CREATE INDEX IF NOT EXISTS idx_users_accounts_subdomain ON users_accounts(amo_subdomain);
CREATE INDEX IF NOT EXISTS idx_users_subdomain ON users(amo_subdomain);
CREATE INDEX IF NOT EXISTS idx_conversations_chat_id ON conversations(telegram_chat_id);
CREATE INDEX IF NOT EXISTS idx_conversations_contact_id ON conversations(amo_contact_id);
CREATE INDEX IF NOT EXISTS idx_conversations_lead_id ON conversations(amo_lead_id);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_session_id ON auth_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_status ON auth_sessions(status);

-- ============================================================
-- Insert demo user (optional, for testing)
-- password: 123456 (bcrypt hash)
-- ============================================================
-- INSERT INTO users_accounts (email, password_hash, amo_subdomain, trial_ends_at, subscription_status)
-- VALUES ('demo@example.com', '$2a$10$YourBcryptHashHere', 'demo', NOW() + INTERVAL '3 days', 'trial')
-- ON CONFLICT (email) DO NOTHING;

-- ============================================================
-- Verify tables created
-- ============================================================
SELECT 'Tables created successfully' as status;
