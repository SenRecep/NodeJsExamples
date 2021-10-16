const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) =>
        readFile(path, 'utf8', (err, data) =>
            err ? reject(err) : resolve(data))
    );
}


getText('./content/first.txt')
    .then(res => console.log(res))
    .catch(err => console.error(err));
