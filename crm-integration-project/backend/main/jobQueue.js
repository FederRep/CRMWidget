const os = require('os');
const crypto = require('crypto');
const db = require('./database');
const queueProviderName = String(process.env.QUEUE_PROVIDER || 'sqlite').toLowerCase();

function toSqlDate(date = new Date()) {
  return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
}

function parseJson(payload) {
  try {
    return JSON.parse(payload);
  } catch (_) {
    return null;
  }
}

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(err) {
      if (err) return reject(err);
      resolve(this);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows || []);
    });
  });
}

async function enqueueJob({
  queueName,
  jobType,
  payload,
  idempotencyKey = null,
  priority = 5,
  maxAttempts = 5,
  delayMs = 0
}) {
  const normalizedQueue = String(queueName || '').trim();
  const normalizedType = String(jobType || '').trim();
  if (!normalizedQueue || !normalizedType) {
    throw new Error('queueName and jobType are required');
  }
  const availableAt = toSqlDate(Date.now() + Math.max(0, Number(delayMs) || 0));
  const safePriority = Math.max(1, Math.min(Number(priority) || 5, 10));
  const safeMaxAttempts = Math.max(1, Math.min(Number(maxAttempts) || 5, 20));
  const payloadJson = JSON.stringify(payload || {});
  try {
    const result = await run(
      `INSERT INTO queue_jobs
      (queue_name, job_type, payload_json, idempotency_key, priority, max_attempts, available_at, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'queued', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [normalizedQueue, normalizedType, payloadJson, idempotencyKey, safePriority, safeMaxAttempts, availableAt]
    );
    return { queued: true, jobId: result.lastID };
  } catch (err) {
    if (String(err?.message || '').includes('idx_queue_jobs_idempotency')) {
      return { queued: false, duplicate: true };
    }
    throw err;
  }
}

let reserveChain = Promise.resolve();

async function reserveNextJobImpl(queueName, workerId) {
  const normalizedQueue = String(queueName || '').trim();
  const lockOwner = String(workerId || '').trim() || `${os.hostname()}:${process.pid}:${crypto.randomUUID()}`;
  if (!normalizedQueue) return null;

  const row = await get(
    `SELECT id, queue_name, job_type, payload_json, idempotency_key, attempts, max_attempts, priority
     FROM queue_jobs
     WHERE queue_name = ?
       AND status = 'queued'
       AND datetime(available_at) <= datetime('now')
     ORDER BY priority DESC, id ASC
     LIMIT 1`,
    [normalizedQueue]
  );
  if (!row) return null;

  const claim = await run(
    `UPDATE queue_jobs
     SET status = 'processing',
         attempts = attempts + 1,
         locked_by = ?,
         locked_at = CURRENT_TIMESTAMP,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = ? AND status = 'queued'`,
    [lockOwner, row.id]
  );
  if (!claim?.changes) return null;

  return {
    id: row.id,
    queueName: row.queue_name,
    jobType: row.job_type,
    payload: parseJson(row.payload_json),
    idempotencyKey: row.idempotency_key,
    attempts: Number(row.attempts || 0) + 1,
    maxAttempts: Number(row.max_attempts || 5),
    priority: Number(row.priority || 5),
    lockOwner
  };
}

function reserveNextJob(queueName, workerId) {
  const task = reserveChain.then(() => reserveNextJobImpl(queueName, workerId));
  reserveChain = task.catch(() => null);
  return task;
}

async function ackJob(jobId) {
  await run(`DELETE FROM queue_jobs WHERE id = ?`, [jobId]);
}

async function moveToDlq(job, errorText) {
  const payloadJson = JSON.stringify(job?.payload || {});
  await run(
    `INSERT INTO queue_dead_letters
    (queue_name, job_type, payload_json, idempotency_key, attempts, max_attempts, last_error, moved_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
    [
      String(job?.queueName || ''),
      String(job?.jobType || ''),
      payloadJson,
      job?.idempotencyKey || null,
      Number(job?.attempts || 0),
      Number(job?.maxAttempts || 0),
      String(errorText || 'unknown')
    ]
  );
  await run(`DELETE FROM queue_jobs WHERE id = ?`, [job.id]);
}

async function retryJob(job, errorText, delayMs) {
  if (!job?.id) return;
  const shouldDlq = Number(job.attempts || 0) >= Number(job.maxAttempts || 1);
  if (shouldDlq) {
    await moveToDlq(job, errorText);
    return { dlq: true };
  }
  const availableAt = toSqlDate(Date.now() + Math.max(1000, Number(delayMs) || 1000));
  await run(
    `UPDATE queue_jobs
     SET status = 'queued',
         available_at = ?,
         locked_by = NULL,
         locked_at = NULL,
         last_error = ?,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = ?`,
    [availableAt, String(errorText || ''), job.id]
  );
  return { retried: true };
}

async function markProcessedIdempotency(key, scope) {
  const normalized = String(key || '').trim();
  if (!normalized) return false;
  try {
    await run(
      `INSERT INTO processed_idempotency (key, scope, created_at)
       VALUES (?, ?, CURRENT_TIMESTAMP)`,
      [normalized, scope || null]
    );
    return true;
  } catch (err) {
    if (String(err?.message || '').includes('UNIQUE constraint failed')) return false;
    throw err;
  }
}

async function isProcessedIdempotency(key) {
  const normalized = String(key || '').trim();
  if (!normalized) return false;
  const row = await get(`SELECT key FROM processed_idempotency WHERE key = ?`, [normalized]);
  return Boolean(row?.key);
}

async function purgeProcessedIdempotency(olderThanHours = 72) {
  const hours = Math.max(1, Number(olderThanHours) || 72);
  await run(
    `DELETE FROM processed_idempotency
     WHERE datetime(created_at) < datetime('now', ?)`,
    [`-${hours} hours`]
  );
}

async function getQueueStats() {
  const queued = await all(
    `SELECT queue_name, status, COUNT(*) AS total
     FROM queue_jobs
     GROUP BY queue_name, status`
  );
  const dlq = await all(
    `SELECT queue_name, COUNT(*) AS total
     FROM queue_dead_letters
     GROUP BY queue_name`
  );
  return { queued, dlq };
}

async function requeueDeadLetter(deadLetterId) {
  const row = await get(`SELECT * FROM queue_dead_letters WHERE id = ?`, [deadLetterId]);
  if (!row) return false;
  await run(
    `INSERT INTO queue_jobs
    (queue_name, job_type, payload_json, idempotency_key, priority, max_attempts, status, available_at, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, 'queued', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
    [
      row.queue_name,
      row.job_type,
      row.payload_json,
      row.idempotency_key || null,
      5,
      Math.max(1, Number(row.max_attempts || 5))
    ]
  );
  await run(`DELETE FROM queue_dead_letters WHERE id = ?`, [deadLetterId]);
  return true;
}

const sqliteProvider = {
  enqueueJob,
  reserveNextJob,
  ackJob,
  retryJob,
  moveToDlq,
  markProcessedIdempotency,
  isProcessedIdempotency,
  purgeProcessedIdempotency,
  getQueueStats,
  requeueDeadLetter
};

if (queueProviderName === 'redis') {
  try {
    // Lazy switch to Redis-backed queue with same API.
    module.exports = require('./redisQueueProvider');
  } catch (err) {
    console.warn('[queue] redis provider unavailable, fallback to sqlite:', err?.message || err);
    module.exports = sqliteProvider;
  }
} else {
  module.exports = sqliteProvider;
}
