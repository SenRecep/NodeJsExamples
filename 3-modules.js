// const names = require('./4-names');
const { recep, sefa } = require('./4-names');
const sayHi = require('./5-utils');

sayHi('yusuf');
sayHi(recep);
sayHi(sefa);

// const data = require('./6-alternative-flavor');
// console.log(data);
const { items, person } = require('./6-alternative-flavor');
const { name } = person;
console.log(items);
console.log(person);
console.log(name);


require('./7-mind-grenade');