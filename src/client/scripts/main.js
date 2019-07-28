(function (root) {

    function main() {
        const url = 'ws://localhost:3000';
        const socket = new WebSocket(url);

        document.querySelector('#alarm').addEventListener('click', () => {
            const payload = { action: 'alarm' };
            socket.send(JSON.stringify(payload));
        });

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
    }

    root.addEventListener('DOMContentLoaded', main);
}(window));
