const ws = require('ws');
const dotenv = require('dotenv');
const path = require('path');
const process = require('process');

dotenv.config({
    path: path.join(__dirname, 'config', 'app.env')
});

const port = Number(process.env.PORT);
const settings = { port };
const server = new ws.Server(settings);
require('./handlers/server.handler')(server);
