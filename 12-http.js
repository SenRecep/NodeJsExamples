const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Developer');
        return;
    }
    if (req.url === '/about') {
        res.end('Recep SEN');
        return;
    }

    res.end(`
    <h1>Ooops!</h1>
    `);
});


server.listen(5050);