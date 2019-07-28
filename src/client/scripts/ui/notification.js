(function (root) {
    function setupUI() {
        console.log('notification');

        const message = document.querySelector('#message');

        document.addEventListener('alarm-notify', () => {
            message.classList.remove('hidden');
        });
    }

    Object.assign(root.app, { setupUI });

}(window));

