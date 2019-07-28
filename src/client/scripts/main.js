(function (root) {

    function main() {
        const url = 'ws://localhost:3000';
        const socket = new WebSocket(url);

        // CLIENT

        // document.getElementById('alarm').addEventListener(() => {
        //     debugger;
        // });

        socket.addEventListener('open', () => {
            console.log('open');
            const payload = { action: 'alarm' };

            socket.send(JSON.stringify(payload));
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
