const os = require('os');
console.log(os.userInfo());
console.log(`The system upTime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    usedMem: os.totalmem() - os.freemem()
};
console.log(currentOS);