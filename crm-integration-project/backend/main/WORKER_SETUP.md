# Telegram Queue/Worker Setup

## Process roles

- `PROCESS_ROLE=api` - run only HTTP ingress/API.
- `PROCESS_ROLE=worker` - run only queue workers.
- `PROCESS_ROLE=all` - run both in one process (default fallback).

Entry points:

- API only: `node backend/main/api.js`
- Worker only: `node backend/main/worker.js`
- Combined: `node backend/main/app.js`

## Cutover mode

- `TELEGRAM_MODE=bot_only` disables MTProto bootstrap/routes for new sessions.
- `TELEGRAM_MODE=hybrid` keeps bot + MTProto compatibility.

## Queue and retry controls

- `QUEUE_PROVIDER=sqlite|redis` (default `sqlite`)
- `REDIS_URL` required when `QUEUE_PROVIDER=redis`
- `INBOUND_WORKER_POLL_MS` (default `300`)
- `OUTBOUND_WORKER_POLL_MS` (default `300`)
- `IDEMPOTENCY_TTL_HOURS` (default `72`)
- `QUEUE_DLQ_ALERT_THRESHOLD` (default `5`)
- `QUEUE_ALERT_INTERVAL_MS` (default `60000`)

## Webhook security

- Set `TELEGRAM_WEBHOOK_SECRET` and call `/api/telegram/setup-webhook`.
- Telegram must send `x-telegram-bot-api-secret-token` matching this value.

## Health endpoints

- `GET /api/health/live` - liveness
- `GET /api/health/ready` - DB + queue readiness
- `GET /api/queue/stats` - queue/DLQ metrics

## Load testing (500-1000 msg/min)

Example:

```bash
WEBHOOK_URL="https://your-domain/api/telegram/webhook" \
WEBHOOK_SECRET="your-secret" \
RATE_PER_MIN=800 \
DURATION_SEC=120 \
node backend/main/scripts/load-test-webhook.js
```

## Recommended PM2 processes

- API process with `PROCESS_ROLE=api`
- Worker process with `PROCESS_ROLE=worker`

This gives real ingress/worker separation and keeps webhook response fast.
