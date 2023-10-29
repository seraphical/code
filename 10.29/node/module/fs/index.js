const fs = require('fs');
const path = require('path');
// console.log('11111');

// // readFile
// fs.readFile(path.resolve(__dirname, './a.txt'), 'utf-8', (err, data) => {
//   console.log(data);
// });

// const data = fs.readFileSync(path.resolve(__dirname, './a.txt'), 'utf-8');
// console.log(data, 'xxxxx');
// console.log('222222');

// writeFile

// fs.writeFile(path.resolve(__dirname, './b.txt'), 'code write', (err, data) => {
//   console.log(data);
// });

fs.writeFileSync(path.resolve(__dirname, './c.txt'), 'code write');
