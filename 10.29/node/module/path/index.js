const path = require('path');

const res = path.join('a', 'b', 'c', './d', '../index.html');
console.log(res);

const res1 = path.resolve(__dirname, './a.txt');
console.log(res1);

console.log(path.parse(res1));
