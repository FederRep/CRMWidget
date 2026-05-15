const crypto = require('crypto');
const {
  reserveNextJob,
  ackJob,
  retryJob,
  purgeProcessedIdempotency
} = require('./jobQueue');

function computeBackoffMs(attempt, baseMs = 1000, maxMs = 120000) {
  const exp = Math.max(1, Number(attempt) || 1);
  const raw = Math.min(maxMs, baseMs * Math.pow(2, exp - 1));
  const jitter = Math.floor(raw * (0.15 * Math.random()));
  return raw + jitter;
}

function startSingleQueueWorker({
  queueName,
  handlers,
  logger,
  pollMs = 500
}) {
  const workerId = `${queueName}:${process.pid}:${crypto.randomUUID().slice(0, 8)}`;
  let stopping = false;
  let timer = null;

  const tick = async () => {
    if (stopping) return;
    try {
      const job = await reserveNextJob(queueName, workerId);
      if (!job) {
        timer = setTimeout(tick, pollMs);
        return;
      }
      const handler = handlers[job.jobType];
      if (!handler) {
        await retryJob(job, `No handler for ${job.jobType}`, 30000);
        timer = setTimeout(tick, 0);
        return;
      }
      try {
        await handler(job);
        await ackJob(job.id);
      } catch (err) {
        const message = err?.message || String(err);
        const delayMs = computeBackoffMs(job.attempts);
        const result = await retryJob(job, message, delayMs);
        if (result?.dlq) {
          logger.warn('[queue] moved to DLQ', {
            queueName,
            jobType: job.jobType,
            jobId: job.id,
            attempts: job.attempts,
            message
          });
        } else {
          logger.warn('[queue] retry scheduled', {
            queueName,
            jobType: job.jobType,
            jobId: job.id,
            attempts: job.attempts,
            delayMs,
            message
          });
        }
      }
    } catch (err) {
      logger.error('[queue] worker tick failed', {
        queueName,
        error: err?.message || err
      });
      timer = setTimeout(tick, Math.max(1000, pollMs));
      return;
    }
    timer = setTimeout(tick, 0);
  };

  tick().catch(() => {});

  return () => {
    stopping = true;
    if (timer) clearTimeout(timer);
  };
}

function startQueueWorkers({ handlers, logger }) {
  const stopInbound = startSingleQueueWorker({
    queueName: 'telegram_inbound',
    handlers,
    logger,
    pollMs: Number(process.env.INBOUND_WORKER_POLL_MS || 300)
  });
  const stopOutbound = startSingleQueueWorker({
    queueName: 'telegram_outbound',
    handlers,
    logger,
    pollMs: Number(process.env.OUTBOUND_WORKER_POLL_MS || 300)
  });

  const cleanupTimer = setInterval(() => {
    purgeProcessedIdempotency(Number(process.env.IDEMPOTENCY_TTL_HOURS || 72)).catch((err) => {
      logger.warn('[queue] idempotency cleanup failed', err?.message || err);
    });
  }, 60 * 60 * 1000);

  return () => {
    stopInbound();
    stopOutbound();
    clearInterval(cleanupTimer);
  };
}

module.exports = { startQueueWorkers, computeBackoffMs };
