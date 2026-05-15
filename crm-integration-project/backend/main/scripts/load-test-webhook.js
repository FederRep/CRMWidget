/*
Usage:
  WEBHOOK_URL="http://localhost:3000/api/telegram/webhook" \
  WEBHOOK_SECRET="optional-secret" \
  RATE_PER_MIN=600 \
  DURATION_SEC=120 \
  node backend/main/scripts/load-test-webhook.js
*/

const axios = require('axios');

const WEBHOOK_URL = process.env.WEBHOOK_URL || 'http://localhost:3000/api/telegram/webhook';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || '';
const RATE_PER_MIN = Math.max(1, Number(process.env.RATE_PER_MIN || 500));
const DURATION_SEC = Math.max(5, Number(process.env.DURATION_SEC || 60));
const CHAT_ID = process.env.TEST_CHAT_ID || '900000001';

const intervalMs = Math.max(5, Math.floor(60000 / RATE_PER_MIN));
const totalToSend = Math.ceil((DURATION_SEC * 1000) / intervalMs);

let sent = 0;
let ok = 0;
let failed = 0;
const startedAt = Date.now();

async function sendOne(index) {
  const update = {
    update_id: 900000000 + index,
    message: {
      message_id: 1000000 + index,
      date: Math.floor(Date.now() / 1000),
      chat: { id: CHAT_ID, type: 'private' },
      from: { id: CHAT_ID, first_name: 'Load', username: 'load_tester' },
      text: `load-test message #${index}`
    }
  };

  const headers = {};
  if (WEBHOOK_SECRET) {
    headers['x-telegram-bot-api-secret-token'] = WEBHOOK_SECRET;
  }

  try {
    const response = await axios.post(WEBHOOK_URL, update, {
      headers,
      timeout: 10000
    });
    if (response.status >= 200 && response.status < 300) ok += 1;
    else failed += 1;
  } catch (_) {
    failed += 1;
  } finally {
    sent += 1;
  }
}

async function run() {
  console.log(`Start load test: ${RATE_PER_MIN} msg/min for ${DURATION_SEC}s (${totalToSend} requests)`);
  const timer = setInterval(() => {
    if (sent >= totalToSend) {
      clearInterval(timer);
      return;
    }
    sendOne(sent + 1).catch(() => {});
  }, intervalMs);

  await new Promise((resolve) => setTimeout(resolve, DURATION_SEC * 1000 + 5000));
  clearInterval(timer);

  const elapsedSec = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
  console.log(
    JSON.stringify(
      {
        url: WEBHOOK_URL,
        durationSec: elapsedSec,
        targetRatePerMin: RATE_PER_MIN,
        sent,
        ok,
        failed,
        actualRatePerMin: Math.round((sent / elapsedSec) * 60)
      },
      null,
      2
    )
  );
}

run().catch((err) => {
  console.error(err?.message || err);
  process.exitCode = 1;
});
