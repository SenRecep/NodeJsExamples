const http = require('http');
const { readFileSync } = require('fs');
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeJs = readFileSync('./navbar-app/browser-app.js');
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyle);
        res.end();
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeJs);
        res.end();
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeLogo);
        res.end();
    }
    else {
        res.end('404');
    }
}).listen(5050);