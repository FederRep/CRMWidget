#!/usr/bin/expect -f

# Требуются переменные окружения (не храните их в репозитории):
#   export DEPLOY_SSH_PASSWORD='...'
#   export DEPLOY_HOST='root@x.x.x.x'
# Опционально:
#   export DEPLOY_REPO_ROOT='/path/to/CRMWidget'   (по умолчанию — каталог этого скрипта)

set timeout 3600

if {![info exists env(DEPLOY_SSH_PASSWORD)] || $env(DEPLOY_SSH_PASSWORD) eq ""} {
  puts stderr "Задайте DEPLOY_SSH_PASSWORD в окружении."
  exit 1
}
if {![info exists env(DEPLOY_HOST)] || $env(DEPLOY_HOST) eq ""} {
  puts stderr "Задайте DEPLOY_HOST, например root@203.0.113.10"
  exit 1
}

set password $env(DEPLOY_SSH_PASSWORD)
set server $env(DEPLOY_HOST)

if {[info exists env(DEPLOY_REPO_ROOT)] && $env(DEPLOY_REPO_ROOT) ne ""} {
  set repo_root $env(DEPLOY_REPO_ROOT)
} else {
  set repo_root [file dirname [file normalize [info script]]]
}

set deploy_tar [file join $repo_root deploy.tar.gz]

set deploy_mode "full"
if {$argc >= 1 && [lindex $argv 0] eq "quick"} {
  set deploy_mode "quick"
}

proc wait_shell {} {
  expect -re {\r?\n[^\r\n]*[#\$]\s*$}
}

set fe_dir [file join $repo_root crm-integration-project frontend]
if {[file isdirectory $fe_dir]} {
  puts "📦 Building frontend..."
  exec sh -c "cd [file nativename $fe_dir] && npm install && npm run build" 2>@1
} else {
  puts "⏭️  Нет crm-integration-project/frontend — сборка фронта пропущена"
}

puts "📁 Creating archive..."
exec sh -c "cd [file nativename $repo_root] && tar -czf [file nativename $deploy_tar] \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.DS_Store' \
  --exclude='deploy.tar.gz' \
  ." 2>@1

puts "📤 Uploading to server..."
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -P 22 \
  [file nativename $deploy_tar] ${server}:/tmp/
expect "password:"
send "$password\r"
expect eof

puts "🔧 Running remote setup..."
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -p 22 $server
expect "password:"
send "$password\r"

wait_shell
send "mkdir -p /opt/crm-integration\r"

wait_shell
send "tar -xzf /tmp/deploy.tar.gz -C /opt/crm-integration\r"

wait_shell
send "rm /tmp/deploy.tar.gz\r"

wait_shell

if {$deploy_mode eq "quick"} {
  send "cd /opt/crm-integration && npm install --production\r"
  wait_shell
  send "mkdir -p /opt/crm-integration/logs\r"
  wait_shell
  send "cd /opt/crm-integration && pm2 delete crm-integration 2>/dev/null; pm2 start ecosystem.config.js --env production\r"
  wait_shell
  send "pm2 save\r"
  wait_shell
  send "nginx -t && systemctl reload nginx\r"
  wait_shell
  send "echo '✅ Quick deploy completed'\r"
  wait_shell
  send "exit\r"
  expect eof
  puts "✅ Quick deployment finished!"
  exec rm -f [file nativename $deploy_tar]
  exit 0
}

send "cd /opt/crm-integration && npm install --production\r"

wait_shell
send "npm install -g pm2\r"

wait_shell
send "apt-get update\r"

wait_shell
send "apt-get install -y postgresql postgresql-contrib nginx certbot python3-certbot-nginx ufw\r"

wait_shell
send "systemctl start postgresql && systemctl enable postgresql\r"

wait_shell
send "sudo -u postgres psql -c \"CREATE DATABASE crm_integration;\" 2>/dev/null || true\r"

wait_shell
send "sudo -u postgres psql -c \"CREATE USER crm_user WITH PASSWORD 'change_me_strong';\" 2>/dev/null || true\r"

wait_shell
send "sudo -u postgres psql -c \"GRANT ALL PRIVILEGES ON DATABASE crm_integration TO crm_user;\"\r"

wait_shell
send "sudo -u postgres psql -d crm_integration -f /opt/crm-integration/crm-integration-project/backend/main/init-postgres.sql 2>/dev/null || true\r"

wait_shell
send "echo '[deploy] Настройте /opt/crm-integration/.env на сервере вручную (секреты не записываются скриптом).'\r"

wait_shell
send "cd /opt/crm-integration && pm2 delete crm-integration 2>/dev/null; pm2 start ecosystem.config.js --env production\r"

wait_shell
send "pm2 save && pm2 startup systemd -u root --hp /root\r"

wait_shell
send "nginx -t && systemctl reload nginx\r"

wait_shell
send "echo '✅ Deployment completed (проверьте .env на сервере)!'\r"

wait_shell
send "exit\r"

expect eof

puts "✅ Deployment finished!"

exec rm -f [file nativename $deploy_tar]
