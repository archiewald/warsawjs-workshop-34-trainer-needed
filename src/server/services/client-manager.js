const debug = require('debug');

const console = {
    log: debug('client:manager:log')
};

const clients = [];


function registerClient(client) {
    console.log('register');
    clients.push(client);
}

function deleteClient(client) {
    console.log('deleteClient');
    const index = clients.indexOf(client);

    if (index === -1) {
        return;
    }

    clients.splice(index, 1);
}

module.exports = {
    registerClient,
    deleteClient,
};
