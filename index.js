// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;
 
const cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});


const express      = require('express');
const app          = express();
const express_port = 3000;

const data = require('./public/api/items');

app.get('/', (req, res) => {
    console.log('GET /');
    res.send(data);
})

app.listen(express_port, () => { // 192.168.1.87
    console.log(`Example app listening at http://localhost:${express_port}`);
})