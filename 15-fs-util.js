const { readFile, writeFile } = require('fs');
const util = require('util');
const readFileAsync = util.promisify(readFile);
const writeFileAsync = util.promisify(writeFile);


const start = async () => {
    try {
        const first = await readFileAsync('./content/first.txt', 'utf8');
        const second = await readFileAsync('./content/second.txt', 'utf8');
        await writeFileAsync('./content/result-async-await.txt', `${first}, ${second}`);
    } catch (err) {
        console.log(err);
    }
}

start();