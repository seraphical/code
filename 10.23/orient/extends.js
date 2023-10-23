// 继承是在两个构造函数之间, 子类, 父类;
// 构造函数里有属性和方法 - 属性写在构造函数体内 - 方法写在构造函数的原型上 - 目的,
//   是让子类继承父类的属性和方法;

function Person(name, age) {
  this.name = {
    firstName: name,
  };
  this.age = age;
}
Person.prototype.play = () => {
  console.log('i can play');
};

function Student() {}

//~ 目的: 要实现 Student 继承 Person,  实质 目的是继承属性和方法

// 原型继承
const jack = new Person('jack', 18);
Student.prototype = jack;
const xiaoming = new Student();
const xiaohong = new Student();
xiaoming.name.firstName = 'wangxiaoming';
console.log(xiaoming.name);
console.log(xiaohong.name);

// 优点: 可以继承父类构造函数的方法;
// 可以继承父类构造函数的属性;
// 缺点: 不能够自己初始化属性;
// 引用类型的属性会被所有实例共享

class Student extends Person {}
//借用继承, 组合继承, 拷贝继承,寄生继承 寄生式组合继承 1  寄生式组合继承 2
