(function (root) {

    function main() {
        const url = 'ws://localhost:3000';
        const socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            console.log('open');
            socket.send('hello darkness');
        });
        socket.addEventListener('message', () => {
            console.log('message');
        });
        socket.addEventListener('close', () => {
            console.log('close');
        });
        socket.addEventListener('error', () => {
            console.log('error');
        });
    }

    root.addEventListener('DOMContentLoaded', main);
}(window));
