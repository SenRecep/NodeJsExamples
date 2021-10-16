const http = require('http');
const PORT = 5050;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
        return;
    }

    if (req.url === '/about') {
        res.end('About Page');
        return;
    }

    res.end('Error Page');

});


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});