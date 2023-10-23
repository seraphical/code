const obj = {
  fn: function (a, b) {
    console.log(this, a, b);
  },
};

setTimeout(obj.fn, 1000);

// console.log(obj.fn.bind());
//

// 1. 非立即执行
// 不会立即调用,返回一个函数
// 这个函数和原先一模一样,但是被锁定了 this
// 第二个参数开始依次是每一个实参和 call 一样
// 常常用在 setTimeout 或者事件执行函数使用改变 this 的指向
