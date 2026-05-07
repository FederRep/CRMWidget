#!/usr/bin/expect -f

set timeout 300
set password "y52pKd6a6GPU@*"
set server "root@5.42.112.196"

# Build and create archive
puts "📦 Building frontend..."
exec cd /Users/mac/CRMWidget/crm-integration-project/frontend && npm install && npm run build

puts "📁 Creating archive..."
exec cd /Users/mac/CRMWidget && tar -czf deploy.tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.DS_Store' \
  --exclude='deploy.tar.gz' \
  .

puts "📤 Uploading to server..."
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -P 22 deploy.tar.gz root@5.42.112.196:/tmp/
expect "password:"
send "$password\r"
expect eof

puts "🔧 Running remote setup..."
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -p 22 root@5.42.112.196
expect "password:"
send "$password\r"

expect "#"
send "mkdir -p /opt/crm-integration\r"

expect "#"
send "tar -xzf /tmp/deploy.tar.gz -C /opt/crm-integration\r"

expect "#"
send "rm /tmp/deploy.tar.gz\r"

expect "#"
send "cd /opt/crm-integration && npm install --production\r"

expect "#"
send "npm install -g pm2\r"

expect "#"
send "apt-get update\r"

expect "#"
send "apt-get install -y postgresql postgresql-contrib nginx certbot python3-certbot-nginx ufw\r"

expect "#"
send "systemctl start postgresql && systemctl enable postgresql\r"

expect "#"
send "sudo -u postgres psql -c \"CREATE DATABASE crm_integration;\" 2>/dev/null || true\r"

expect "#"
send "sudo -u postgres psql -c \"CREATE USER crm_user WITH PASSWORD 'crm_password_2024';\" 2>/dev/null || true\r"

expect "#"
send "sudo -u postgres psql -c \"GRANT ALL PRIVILEGES ON DATABASE crm_integration TO crm_user;\"\r"

expect "#"
send "sudo -u postgres psql -d crm_integration -f /opt/crm-integration/crm-integration-project/backend/main/init-postgres.sql 2>/dev/null || true\r"

expect "#"
send "cat > /opt/crm-integration/.env << 'EOF'
NODE_ENV=production
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crm_integration
DB_USER=crm_user
DB_PASSWORD=crm_password_2024
DB_SSL=false
JWT_SECRET=271810b6be6d0bd383136da01238ff921c57c3fe9d5baed717777168d9783218b4d01fbd1a83dbb6839d4eac222aeb4d2389b6cd899bb07661d715a8b3bdd8cd
CLIENT_ID=7c0980eb-1e92-4101-a202-b5edb4566fb6
CLIENT_SECRET=Kht02uoh5ZVhDqNykwOK8H0nnNKfSi7rbO9GlTHiBgVtKZ5kDQYQmEv0hLGnECZq
REDIRECT_URI=https://corsa-crm.ru/api/auth/callback
TELEGRAM_TOKEN=8611591835:AAH8NzSlORDeQ3tE44kshaZV5pt4x2j0wow
EOF\r"

expect "#"
send "cd /opt/crm-integration && pm2 delete crm-integration 2>/dev/null; pm2 start ecosystem.config.js --env production\r"

expect "#"
send "pm2 save && pm2 startup systemd -u root --hp /root\r"

expect "#"
send "cat > /etc/nginx/sites-available/corsa-crm.ru << 'EOF'
server {
    listen 80;
    server_name corsa-crm.ru www.corsa-crm.ru;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF\r"

expect "#"
send "ln -sf /etc/nginx/sites-available/corsa-crm.ru /etc/nginx/sites-enabled/\r"

expect "#"
send "rm -f /etc/nginx/sites-enabled/default\r"

expect "#"
send "nginx -t && systemctl reload nginx\r"

expect "#"
send "certbot --nginx -d corsa-crm.ru -d www.corsa-crm.ru --non-interactive --agree-tos --email admin@corsa-crm.ru 2>/dev/null || true\r"

expect "#"
send "ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw --force enable\r"

expect "#"
send "echo '✅ Deployment completed!'\r"

expect "#"
send "exit\r"

expect eof

puts "✅ Deployment finished!"
puts "🌐 Website: https://corsa-crm.ru"

# Cleanup
exec rm -f /Users/mac/CRMWidget/deploy.tar.gz
