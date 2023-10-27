function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.play = () => {
  console.log('i can play');
};

// function Student() {}

//~ 借用继承

// function Student(name, age) {
//   Person.apply(this, [name, age]);
// }

// const xiaoming = new Student('xiaoming', 10);
// console.log(xiaoming.name);

// 优点: 完美继承了父类的属性;
// 缺点: 但是父类原型上的方法继承不过来;

//~ 组合继承
// 原型继承: 能够继承属性和方法, 但是继承的属性有缺点;
// 借用继承: 完美继承父类的属性, 但是方法有问题;
// 组合继承: 就可以完美继承属性和方法;

function Student(name, age) {
  Person.apply(this, [name, age]);
}

Student.prototype = new Person();

Student.prototype.write = () => {
  console.log('i can write');
};

console.log(person);
const xiaoming = new Student('xiaoming', 10);
console.log(xiaoming.name);
xiaoming.play();
console.log(xiaoming);

// 缺点:
// 1. 继承来父类的属性,在原型上面多了一套,浪费内存
// 2. 给子类添加方法的时候,必须要在继承之后,并且是添加在了父类的实例身上

//~ 拷贝继承
function Student(name, age) {
  const person = new Person(name, age);
  for (let key in person) {
    Student.prototype[key] = person[key];
  }
}

const xiaoming = new Student('xiaoming', 10);

console.log(xiaoming.name);
xiaoming.play();
console.log(xiaoming);
// 优点: 可以继承所有属性和方法;
// 缺点: 继承来的属性不在子类自己身上,还是在原型上
