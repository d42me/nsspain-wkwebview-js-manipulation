function printHelloWorld() {
    window.webkit.messageHandlers.test.postMessage("Hello, world!");
}
window.onload = printHelloWorld;
