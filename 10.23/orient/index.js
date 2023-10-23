// 汽车. 汽车就是一个对象,不需要了解内部怎么运行. 只用使用刹车油面, 这些是这个对象抛出的接口.让我们操纵汽车
// 面向对象的特性
// 1. 封装
// 2. 鸟和鹰可以抽象为同一个类. 抽象 继承

// const jack = {};
// jack.name = 'jack';
// jack.age = 10;
// jack.study = function () {
//   console.log('study');
// };

// const rose = {};
// rose.name = 'rose';
// rose.age = 10;
// rose.study = function () {
//   console.log('study');
// };

// function Student(name) {
//   const obj = {}; // 原料
//   obj.name = name;
//   obj.age = 10;
//   obj.study = () => {
//     console.log('study');
//   }; // 加工
//   return obj; // 出厂
// }
// //工厂模式
// const jack = Student('jack');
// const rose = Student('rose');

// console.log(jack.study === rose.study); //false

//构造函数 只是简化工厂模式
// function Student(name) {
//   this.name = name;
//   this.age = 10;
//   this.study = () => {
//     console.log('study');
//   };
// }
// //~write, jack 和 rose 都能 write
// Student.prototype.write = () => {
//   console.log('write');
// };

// const jack = new Student('jack'); //! new 了一个构造函数,创建了一个实例 对象, Student 的实例,实例是实现构造函数的
// const rose = new Student('rose');
// console.log(jack.study === rose.study); //false
// console.log(jack.write === rose.write); //true

//目的  console.log(jack.study === rose.study); //true  想要优化成 true

// 每个函数都有个一个 prototype 属性,是一个对象数据类型
// - 每个构造函数都有个一个 prototype 属性,是一个对象数据类型,这个对象的所有属性和方法都会被(构造函数的实例)实现
// 每个对象都有一个__proto__,指向其构造函数的 prototype

// 要创建一个构造函数的最好方式是, 属性定义在构造函数内, 相同的方法和属性定义在构造函数的 prototype 上
// 所以这就是 es6 类的底层

// class Student{
//     constructor(){}
//     study(){

//     }
// }

function Poultry() {}
Poultry.prototype.fly = () => {
  console.log('我能飞');
};
//构造函数和构造函数之间,类和类之间才叫继承. 实例和类叫做实现,实例化
function Bird 继承 Poultry() {
    能飞了
}

const 麻雀 = new Bird()
// 实例不是继承构造函数,而是实现构造构造函数
