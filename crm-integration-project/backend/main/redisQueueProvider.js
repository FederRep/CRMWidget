let redisClientPromise = null;

function getRedisClient() {
  if (redisClientPromise) return redisClientPromise;
  redisClientPromise = (async () => {
    const redisLib = require('redis');
    const url = process.env.REDIS_URL;
    if (!url) throw new Error('REDIS_URL is required for redis queue provider');
    const client = redisLib.createClient({ url });
    client.on('error', () => {});
    await client.connect();
    return client;
  })();
  return redisClientPromise;
}

function queueKey(name) {
  return `queue:${name}:ready`;
}

function dlqKey(name) {
  return `queue:${name}:dlq`;
}

function namesKey() {
  return 'queue:names';
}

function idempotencyKey() {
  return 'queue:idempotency';
}

function processedKey() {
  return 'queue:processed';
}

function scoreFor(priority, availableAtTs) {
  const pr = Math.max(1, Math.min(Number(priority) || 5, 10));
  const rank = 11 - pr;
  return rank * 1e13 + Number(availableAtTs || Date.now());
}

async function enqueueJob({
  queueName,
  jobType,
  payload,
  idempotencyKey: idem = null,
  priority = 5,
  maxAttempts = 5,
  delayMs = 0
}) {
  const client = await getRedisClient();
  if (idem) {
    const inserted = await client.hSetNX(idempotencyKey(), idem, String(Date.now()));
    if (inserted === 0) return { queued: false, duplicate: true };
  }
  const id = await client.incr('queue:seq');
  const job = {
    id,
    queueName,
    jobType,
    payload: payload || {},
    idempotencyKey: idem || null,
    attempts: 0,
    maxAttempts: Math.max(1, Number(maxAttempts) || 5),
    priority: Math.max(1, Math.min(Number(priority) || 5, 10))
  };
  await client.hSet(`queue:jobs:${id}`, {
    payload: JSON.stringify(job)
  });
  await client.sAdd(namesKey(), queueName);
  await client.zAdd(queueKey(queueName), [
    { score: scoreFor(job.priority, Date.now() + Math.max(0, Number(delayMs) || 0)), value: String(id) }
  ]);
  return { queued: true, jobId: id };
}

async function reserveNextJob(queueName, workerId) {
  const client = await getRedisClient();
  const nowScore = scoreFor(10, Date.now());
  const candidates = await client.zRangeByScore(queueKey(queueName), 0, nowScore, {
    LIMIT: { offset: 0, count: 1 }
  });
  if (!candidates || candidates.length === 0) return null;
  const id = candidates[0];
  const removed = await client.zRem(queueKey(queueName), id);
  if (!removed) return null;
  const row = await client.hGet(`queue:jobs:${id}`, 'payload');
  if (!row) return null;
  const job = JSON.parse(row);
  job.attempts = Number(job.attempts || 0) + 1;
  job.lockOwner = workerId || `${process.pid}`;
  await client.hSet(`queue:jobs:${id}`, { payload: JSON.stringify(job) });
  return job;
}

async function ackJob(jobId) {
  const client = await getRedisClient();
  await client.del(`queue:jobs:${jobId}`);
}

async function moveToDlq(job, errorText) {
  const client = await getRedisClient();
  const payload = JSON.stringify({
    ...job,
    lastError: String(errorText || ''),
    movedAt: new Date().toISOString()
  });
  await client.rPush(dlqKey(job.queueName), payload);
  await client.del(`queue:jobs:${job.id}`);
}

async function retryJob(job, errorText, delayMs) {
  const client = await getRedisClient();
  if (Number(job.attempts || 0) >= Number(job.maxAttempts || 1)) {
    await moveToDlq(job, errorText);
    return { dlq: true };
  }
  const updated = {
    ...job,
    lastError: String(errorText || '')
  };
  await client.hSet(`queue:jobs:${job.id}`, { payload: JSON.stringify(updated) });
  await client.zAdd(queueKey(job.queueName), [
    { score: scoreFor(job.priority, Date.now() + Math.max(500, Number(delayMs) || 1000)), value: String(job.id) }
  ]);
  return { retried: true };
}

async function markProcessedIdempotency(key, scope) {
  const client = await getRedisClient();
  const value = JSON.stringify({ scope: scope || null, ts: Date.now() });
  const ok = await client.hSetNX(processedKey(), key, value);
  return Boolean(ok);
}

async function isProcessedIdempotency(key) {
  const client = await getRedisClient();
  return Boolean(await client.hGet(processedKey(), key));
}

async function purgeProcessedIdempotency() {
  return;
}

async function getQueueStats() {
  const client = await getRedisClient();
  const queues = await client.sMembers(namesKey());
  const queued = [];
  const dlq = [];
  for (const name of queues || []) {
    const qTotal = await client.zCard(queueKey(name));
    const dTotal = await client.lLen(dlqKey(name));
    queued.push({ queue_name: name, status: 'queued', total: qTotal });
    dlq.push({ queue_name: name, total: dTotal });
  }
  return { queued, dlq };
}

async function requeueDeadLetter(deadLetterId) {
  const client = await getRedisClient();
  const queues = await client.sMembers(namesKey());
  const target = Number(deadLetterId || 0);
  if (!target) return false;
  for (const name of queues || []) {
    const values = await client.lRange(dlqKey(name), 0, -1);
    for (let idx = 0; idx < values.length; idx += 1) {
      const parsed = JSON.parse(values[idx] || '{}');
      if (Number(parsed.id || 0) !== target) continue;
      await client.lSet(dlqKey(name), idx, '__removed__');
      await client.lRem(dlqKey(name), 1, '__removed__');
      await enqueueJob({
        queueName: parsed.queueName || name,
        jobType: parsed.jobType,
        payload: parsed.payload,
        idempotencyKey: parsed.idempotencyKey ? `${parsed.idempotencyKey}:requeue:${Date.now()}` : null,
        priority: parsed.priority || 5,
        maxAttempts: parsed.maxAttempts || 5
      });
      return true;
    }
  }
  return false;
}

module.exports = {
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
