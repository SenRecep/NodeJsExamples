const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (user, isLoading) => {
    console.log(`data recieved`);
});

customEmitter.on('response', (user, isLoading) => {
    console.log(`data recieved next`);
});

customEmitter.emit('response', { name: 'recep', age: 10 }, true);