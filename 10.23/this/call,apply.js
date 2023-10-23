//! call apply bind
//~ 改变了 this 的指向
// 对象里面有属性和方法(函数)

// const obj = {
//   fn: function (a, b) {
//     console.log(this, a, b);
//   },
// };

// // const obj2 = { a: 1 };
// // const number = 1;
// // obj.fn(); // obj undefined
// obj.fn.call(null);

// 立即执行

//参数
// call 和 apply 的第一个参数是该函数本次调用时候的 this 指向

// call
// 1. 立即执行
// 2. 第一个参数为 this的指向, 第二个参数开始,依次是该函数的每一个实参

// apply
// 1. 立即执行
// 2. 第一个参数为 this的执行, 第二个参数是一个数组,内部的每一个数据依次是该函数的实参

// 第一个参数
// 不传参直接调用, 指向 window
// 传一个对象,指向这个对象
// 传一个普通数据类型, 指向的是这个数据类型对象
// 传入 null, 指向 window

console.log(Math.max(1, 2, 3, 4, 5, 6)); // 求若干个数字中的最大值
// console.log(Math.max('3', '4')); //string=>number

const arr = [6, 3, 2, 7, 9];
console.log(Math.max.apply(null, arr)); // 求若干个数字中的最大值
console.log(arr.findIndex((item) => item === Math.max.apply(null, arr)));
