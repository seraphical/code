//~关于括号的问题

// function fn() {
//   console.log('我执行了');
// }

// fn(); // 执行fn,调用这个函数 ,js 代码执行到这一行的时候

// setTimeout(fn, 3000); // 回调

//  const fnB = fn
//  fnB()

// function fnnn() {
//   console.log('我执行了');
//   return 1;
// }

// // const test = fnnn();
// setTimeout(() => {
//   console.log(fnnn());
// }, 3000);
//! 自执行函数
(() => {
  console.log('aaa');
})();

// 函数定义时候的参数叫做形参,表示要接受的内容
function fn(a, b) {}

// 函数调用时候实际传入的内容叫做实参
fn(1, 2);
