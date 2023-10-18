// const obj = {}; //const obj = new Object()

// console.log(obj.__proto__ == Object.prototype); //true

// //~ string,number, boolean ,   object function   Object    Date

// const arr = [];
// console.log(arr.__proto__ == Array.prototype); // true

// function fn() {}
// console.log(fn); // true

// const date = new Date();
// console.log(date.__proto__ == Date.prototype); // true

// function fn() {}

// console.log(fn.prototype);

// fn = {
//     prototype:{
//         constructor:fn
//     }
// }

// prototype =>  return{}
//! 原型链

function Person(name) {
  this.name = name;
  this.age = 10;
}

//~构造函数, 要和 new 关键字连用.   1.里面可以使用 this   2.自动返回一个对象

const jack = new Person('jack'); //{name: 'jack', age: 10}

console.log(jack.__proto__ === Person.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ == null);
console.log(Function.prototype.__proto__ === Object.prototype);
