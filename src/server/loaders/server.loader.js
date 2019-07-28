const ws = require('ws');
const process = require('process');
const { verifyClient } = require('../services/verify-client');
const setupServer = require('../handlers/server.handler');

module.exports = () => {
    const port = Number(process.env.PORT);
    const settings = { port, verifyClient };
    const server = new ws.Server(settings);
    setupServer(server);
};
