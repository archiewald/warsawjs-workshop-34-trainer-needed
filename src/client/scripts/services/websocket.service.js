(function (root) {
    let socket = null;

    function sendMessage(data) {
        socket.send(JSON.stringify(data));
    }

    function reconnect() {
        const time = 5000;
        setTimeout(() => {
            console.log(`Reconnect after ${time} ms`);
            setupServer();
        }, time);
    }

    function setupServer() {
        socket = new WebSocket(root.app.config.url);

        socket.addEventListener('open', () => {
            console.log('open');
        });
        socket.addEventListener('message', (event) => {
            console.log('message');
            try {
                const message = JSON.parse(event.data);
                console.log('message: ', message);

                const customEvent = new CustomEvent('alarm-notify', message);
                document.dispatchEvent(customEvent);

            } catch (error) {
                console.error(error);
            }
        });
        socket.addEventListener('close', () => {
            console.log('close');
            reconnect();
        });
        socket.addEventListener('error', () => {
            console.log('error');
            reconnect();
        });
    }

    Object.assign(root.app, { sendMessage, setupServer });
}(window));
