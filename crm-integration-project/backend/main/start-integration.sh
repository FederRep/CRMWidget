#!/bin/bash

# start-integration.sh

echo "🚀 Запускаем интеграцию..."

# Запускаем app.js в фоне
echo "🔄 Запускаем app.js..."
node app.js > app_output.log 2>&1 &
APP_PID=$!

# Ждём, пока app.js запустится
sleep 3

# Проверим, запустилось ли
if ps -p $APP_PID > /dev/null; then
  echo "✅ app.js запущен (PID: $APP_PID)"
else
  echo "❌ app.js не запустился"
  cat app_output.log
  exit 1
fi

# Запускаем localtunnel в фоне
echo "🔄 Запускаем localtunnel..."
lt --port 3000 > tunnel_output.log 2>&1 &
TUNNEL_PID=$!

# Ждём немного, чтобы localtunnel запустился
sleep 5

# Читаем вывод из лога
TUNNEL_URL=$(grep -o 'https://[^[:space:]]*' tunnel_output.log | head -n 1)

if [[ -z "$TUNNEL_URL" ]]; then
  echo "❌ Не удалось получить URL от localtunnel"
  cat tunnel_output.log
  # Убиваем app.js
  kill $APP_PID
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
echo "💡 Процессы запущены в фоне:"
echo "   app.js PID: $APP_PID"
echo "   localtunnel PID: $TUNNEL_PID"

echo ""
echo "⚠️  Чтобы остановить: kill $APP_PID $TUNNEL_PID"

# Удалим лог-файлы при выходе
trap "rm -f app_output.log tunnel_output.log" EXIT

echo ""
echo "🔍 Логи app.js можно смотреть командой: tail -f app_output.log"
echo "🔍 Логи localtunnel: cat tunnel_output.log"