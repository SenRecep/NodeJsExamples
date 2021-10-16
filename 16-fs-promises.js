const { readFile, writeFile } = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-async-await.txt', `${first}, ${second}`);
    } catch (err) {
        console.log(err);
    }
}

start();