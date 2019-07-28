(function (root) {
    let socket = null;

    function sendMessage(data) {
        socket.send(JSON.stringify(data));
    }

    function main() {
        const url = 'ws://localhost:3000';
        socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            console.log('open');

        });
        socket.addEventListener('message', (event) => {
            console.log('message');
            try {
                console.log('message: ', JSON.parse(event.data));
            } catch (error) {
                console.error(error);
            }
        });
        socket.addEventListener('close', () => {
            console.log('close');
        });
        socket.addEventListener('error', () => {
            console.log('error');
        });
        setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);
    root.sendMessage = sendMessage;
}(window));
