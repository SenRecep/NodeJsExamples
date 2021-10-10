const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) { console.error(err); return; }
    let data = { first: result };
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) { console.error(err); return; }
        data.second = result;
        writeFile('./content/result-async.txt', `${data.first}, ${data.second}`, (err, result) => {
            if (err) { console.error(err); return; }
            console.log(result);
        });
    });
});