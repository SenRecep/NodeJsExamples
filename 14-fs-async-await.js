const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) =>
        readFile(path, 'utf8', (err, data) =>
            err ? reject(err) : resolve(data))
    );
}


const setText = (path, text) => {
    return new Promise((resolve, reject) =>
        writeFile(path, text, (err, data) =>
            err ? reject(err) : resolve(data))
    );
}


const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        await setText('./content/result-async-await.txt', `${first}, ${second}`);
    } catch (err) {
        console.log(err);
    }
}

start();