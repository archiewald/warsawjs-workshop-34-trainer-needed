const { registerClient, deleteClient } = require('../services/client-manager');

module.exports = (client) => {
    client.send(JSON.stringify({ obiad: '13:15' }));
    registerClient(client);

    client.on('open', () => {
        console.log('open');
    });
    client.on('close', () => {
        console.log('close');
        deleteClient(client);
    });
    client.on('message', (message) => {
        try {
            console.log('message: ', JSON.parse(message));
        } catch (error) {
            console.error(error);
        }
    });
    client.on('error', () => {
        console.log('error');
        deleteClient(client);
    });
};
