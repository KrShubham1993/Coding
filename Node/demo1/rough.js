const { nextTick } = require('node:process');

console.log('start');

new Promise((res,rej) => {
    console.log('a');
    setTimeout(() => console.log('b'))
    res('hi');
}).then(res => console.log(res))
nextTick(() => {
  console.log('nextTick callback');
});

const { nextTick } = require('node:process');

//////
Promise.resolve().then(() => console.log(2));
queueMicrotask(() => console.log(3));
nextTick(() => console.log(1));
// Output:
// 1
// 2
// 3