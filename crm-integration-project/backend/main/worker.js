process.env.PROCESS_ROLE = 'worker';

const { startWorkers } = require('./app');

startWorkers();
