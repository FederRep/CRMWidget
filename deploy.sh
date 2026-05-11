#!/bin/bash

# ============================================================
# Deploy Script for CRM Integration
# Server: 5.42.112.196
# Domain: corsa-crm.ru
# ============================================================

set -e

SERVER_IP="5.42.112.196"
SERVER_USER="root"
PROJECT_DIR="/opt/crm-integration"

echo "🚀 Starting deployment to $SERVER_IP..."

# 1. Build frontend locally (если есть каталог)
if [ -d crm-integration-project/frontend ]; then
  echo "📦 Building frontend..."
  (cd crm-integration-project/frontend && npm install && npm run build)
else
  echo "⏭️  Нет crm-integration-project/frontend — сборка фронта пропущена"
fi

# 2. Create archive of project
echo "📁 Creating project archive..."
tar -czf deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.DS_Store' \
  --exclude='deploy.tar.gz' \
  .

# 3. Upload to server
echo "📤 Uploading to server..."
scp -P 22 deploy.tar.gz $SERVER_USER@$SERVER_IP:/tmp/

# 4. Execute remote deployment commands
echo "🔧 Configuring server..."
ssh -p 22 $SERVER_USER@$SERVER_IP << 'REMOTE_SCRIPT'

PROJECT_DIR="/opt/crm-integration"

# Create project directory
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Extract archive
tar -xzf /tmp/deploy.tar.gz -C $PROJECT_DIR
rm /tmp/deploy.tar.gz

# Install dependencies
cd $PROJECT_DIR/crm-integration-project/backend/main && npm install --omit=dev
cd $PROJECT_DIR
npm install --production

# Install PM2 globally if not exists
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# Setup PostgreSQL
echo "🐘 Setting up PostgreSQL..."
if ! command -v psql &> /dev/null; then
    apt-get update
    apt-get install -y postgresql postgresql-contrib
    systemctl start postgresql
    systemctl enable postgresql
fi

# Create database and user
sudo -u postgres psql << EOF
CREATE DATABASE crm_integration;
CREATE USER crm_user WITH PASSWORD 'crm_password_2024';
GRANT ALL PRIVILEGES ON DATABASE crm_integration TO crm_user;
\q
EOF

# Initialize database tables (если есть SQL init)
if [ -f "$PROJECT_DIR/crm-integration-project/backend/main/init-postgres.sql" ]; then
  sudo -u postgres psql -d crm_integration -f "$PROJECT_DIR/crm-integration-project/backend/main/init-postgres.sql" || true
fi

# Setup environment variables
cat > $PROJECT_DIR/.env << 'EOF'
NODE_ENV=production
PORT=3000

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crm_integration
DB_USER=crm_user
DB_PASSWORD=crm_password_2024
DB_SSL=false

# JWT
JWT_SECRET=271810b6be6d0bd383136da01238ff921c57c3fe9d5baed717777168d9783218b4d01fbd1a83dbb6839d4eac222aeb4d2389b6cd899bb07661d715a8b3bdd8cd

# amoCRM OAuth
CLIENT_ID=7c0980eb-1e92-4101-a202-b5edb4566fb6
CLIENT_SECRET=Kht02uoh5ZVhDqNykwOK8H0nnNKfSi7rbO9GlTHiBgVtKZ5kDQYQmEv0hLGnECZq
REDIRECT_URI=https://corsa-crm.ru/api/auth/callback

# Telegram
TELEGRAM_TOKEN=8611591835:AAH8NzSlORDeQ3tE44kshaZV5pt4x2j0wow
TELEGRAM_BOT_USERNAME=
TELEGRAM_API_ID=
TELEGRAM_API_HASH=
EOF

# Setup PM2
cd $PROJECT_DIR
pm2 delete crm-integration 2>/dev/null || true
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup systemd -u root --hp /root

# Setup Nginx
echo "🌐 Setting up Nginx..."
apt-get install -y nginx certbot python3-certbot-nginx

# Create Nginx config
cat > /etc/nginx/sites-available/corsa-crm.ru << 'EOF'
server {
    listen 80;
    server_name corsa-crm.ru www.corsa-crm.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/corsa-crm.ru /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test and reload nginx
nginx -t
systemctl reload nginx

# Setup SSL with Let's Encrypt
echo "🔒 Setting up SSL..."
certbot --nginx -d corsa-crm.ru -d www.corsa-crm.ru --non-interactive --agree-tos --email admin@corsa-crm.ru

# Setup firewall
echo "🛡️ Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "✅ Deployment completed!"
echo "🌐 Your app is available at: https://corsa-crm.ru"

REMOTE_SCRIPT

# Cleanup local archive
rm -f deploy.tar.gz

echo "✅ Deployment finished successfully!"
echo "🌐 Website: https://corsa-crm.ru"
echo "📊 PM2 Status: ssh root@$SERVER_IP 'pm2 status'"
