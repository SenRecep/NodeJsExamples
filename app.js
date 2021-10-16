const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        // const text = fs.readFileSync('./content/big.txt', { encoding: 'utf8' });
        //res.end(text);
        const stream = fs.createReadStream('./content/big.txt', { encoding: 'utf8' });
        stream.on('open', () => stream.pipe(res));
        stream.on('err', err => res.end(err));
    })
    .listen(5050);