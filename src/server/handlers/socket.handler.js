module.exports = (socket) => {
    socket.on('open', () => {
        console.log('open');
    });
    socket.on('close', () => {
        console.log('close');
    });
    socket.on('message', (message) => {
        console.log('message: ', message);
    });
    socket.on('error', () => {
        console.log('error');
    });
};
