const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);
console.log('environment', process.env.NODE_ENV)
module.exports = server;
