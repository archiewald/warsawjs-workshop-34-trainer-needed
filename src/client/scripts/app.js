(function (root) {
    const app = {
        config: {
            url: 'ws://localhost:3000'
        }
    };

    Object.assign(root, { app });
}(window));
