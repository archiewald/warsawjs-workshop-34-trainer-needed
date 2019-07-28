

(function (root) {
    function setupUI() {
        console.log('alarm-button');

        document.querySelector('#alarm').addEventListener('click', () => {
            root.app.sendMessage({ action: 'alarm' });
        });
    }

    Object.assign(root.app, { setupUI });

}(window));
