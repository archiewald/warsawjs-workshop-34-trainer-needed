function setupUI() {
    console.log('alarm-button');

    document.querySelector('#alarm').addEventListener('click', () => {
        sendMessage({ action: 'alarm' });
    });
}
