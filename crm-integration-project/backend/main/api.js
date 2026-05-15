process.env.PROCESS_ROLE = 'api';

const { startHttpServer } = require('./app');

startHttpServer();
