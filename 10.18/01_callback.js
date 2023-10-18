//forEach,sort
// Array.prototype:scrollTo,forEach,map,reduce

// function call(fn) {
//   let a = 1;
//   fn(a);
// }

// call((item) => {
//     console.log(item);
//   });
//回调函数会在外部函数执行的时候被调用

//! 回调函数的运行环境是它被调用时候的环境,所以它可以获取到被调用时候的上下文
// const array = [1, 3, 4, 5, 7];
// let sum = 0;
array.forEach((item, index, arr) => {
  sum += item;
});

// const temp = array.map((item) => item + '1');

// const midData = array.reduce((prev, item, index) => {
//   prev[index] = item + '1';
//   return prev;
// }, []);

// console.log(midData);
// const array = ['11', '31', '41', '51', '71'];
// ~作为一个函数的参数,是一个函数, 这个作为参数的函数叫做回调函数
// ! 异步: 系统执行到异步代码的时候,系统会将它挂起,等待同步代码执行完毕之后再执行异步代码
setTimeout(() => {
  console.log('1'); // 处理异步操作的结果
}, 0);

console.log('4');

setTimeout(() => {
  console.log('2'); // 处理异步操作的结果
}, 1000);

console.log('5');

const fn = () => {
  console.log('3'); // 处理异步操作的结果
};

setTimeout(fn, 0); //4 1 5 2 3

// 4 5 1 3 2

//a bbb hello
