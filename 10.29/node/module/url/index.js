const url = require('url');
const path = require('path');
const urlTest = 'http://1.23.3.4:8080/readFile?name=jack&age=18';

// const res = url.parse(urlTest, true);
// console.log(res);

const res2 = path.parse(urlTest);
console.log(res2);
