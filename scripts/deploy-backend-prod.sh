#!/usr/bin/env bash
# Синхронизирует backend на VPS и перезапускает PM2.
# Требуется SSH-ключ к серверу (без пароля в скрипте).
#
#   DEPLOY_HOST=root@5.42.112.196 ./scripts/deploy-backend-prod.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/crm-integration-project/backend/main/"
HOST="${DEPLOY_HOST:-root@5.42.112.196}"
DEST="${DEPLOY_REMOTE_PATH:-/opt/crm-integration/crm-integration-project/backend/main}"

if [[ ! -d "$SRC" ]]; then
  echo "Нет каталога: $SRC"
  exit 1
fi

echo "→ rsync $SRC → $HOST:$DEST"
rsync -avz \
  --exclude 'node_modules' \
  --exclude 'crm_integration.db' \
  --exclude '.env' \
  "$SRC" "$HOST:$DEST/"

echo "→ npm install + pm2 restart"
ssh "$HOST" "cd '$DEST' && npm install --omit=dev && (pm2 restart crm-integration || pm2 restart all)"

echo "Готово. На сервере в .env должны быть TELEGRAM_API_ID и TELEGRAM_API_HASH."
