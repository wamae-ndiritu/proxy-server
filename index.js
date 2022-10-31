const cors_proxy = require('cors-anywhere');
// Listen on a specific host via the HOST environment variable

const host = '0.0.0.0';

// Listen the server
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`Proxy server running 0n port ${port}`)
});