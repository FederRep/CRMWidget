#!/bin/bash

# setup-tunnel.sh

echo "🔄 Запускаем localtunnel..."

# Запускаем localtunnel в фоне и сохраняем PID
lt --port 3000 > tunnel_output.log 2>&1 &
TUNNEL_PID=$!

# Ждём немного, чтобы localtunnel запустился
sleep 3

# Читаем вывод из лога
TUNNEL_URL=$(grep -o 'https://[^[:space:]]*' tunnel_output.log | head -n 1)

if [[ -z "$TUNNEL_URL" ]]; then
  echo "❌ Не удалось получить URL от localtunnel"
  cat tunnel_output.log
  exit 1
fi

echo "🌐 Новый URL: $TUNNEL_URL"

# Обновляем файлы
echo "✏️ Обновляем manifest.json..."
sed -i.bak "s|https://[a-z0-9-]*\.loca\.lt|$TUNNEL_URL|g" manifest.json

echo "✏️ Обновляем widget.html..."
sed -i.bak "s|https://[a-z0-9-]*\.loca\.lt|$TUNNEL_URL|g" widget.html

echo "✏️ Обновляем .env..."
sed -i.bak "s|REDIRECT_URI=https://[a-z0-9-]*\.loca\.lt/callback|REDIRECT_URI=$TUNNEL_URL/callback|g" .env

echo "✅ Файлы обновлены!"

echo ""
echo "📌 Используй этот URL для загрузки интеграции в amoCRM:"
echo "$TUNNEL_URL/manifest.json"

echo ""
echo "mPid: $TUNNEL_PID"
echo "💡 localtunnel запущен в фоне. Чтобы остановить: kill $TUNNEL_PID"

# Удалим лог-файл
rm tunnel_output.log