function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.play = () => {
  console.log('i can play');
};

const person = new Person('person', 10);
// console.log(person);
//寄生继承 1

// function Student(name, age) {
//   return new Person(name, age);
// }

//寄生 继承 2
//~原型继承是子类构造函数的 prototype = 父类构造函数的实例, 就可以完美继承方法
//~寄生继承就是 子类构造函数的 prototype = 父类构造函数的 prototype, 可以继承方法,但是是在父类的原型上,属性继承不过来

// function Student(name, age) {}

// Student.prototype = Person.prototype;

// const xiaoming = new Student('xiaoming', 18);

// console.log(xiaoming.name);
// xiaoming.play();

// console.log(xiaoming);

//寄生借用继承 1

// function Student(name, age) {
//   Person.call(this, name, age); //继承属性
// }

// Student.prototype = Person.prototype; // 继承方法

// const xiaoming = new Student('xiaoming', 18);

// console.log(xiaoming.name);
// xiaoming.play();

//优点: 完美继承属性和方法
//缺点: 给子类原型上添加内容的时候,是添加在了父类的原型上

//寄生组合继承
function Student(name, age) {
  Person.call(this, name, age); //~借用, 继承属性
}

(() => {
  function Mid() {}
  Mid.prototype = Person.prototype; //~ 中介, 应用的是寄生继承, 所以 Mid 上面继承了方法
  const mid = new Mid();
  //   console.log(mid);
  mid.constructor = Student;
  Student.prototype = mid; //~原型
})();

const xiaoming = new Student('xiaoming', 18);

// console.log(xiaoming.name);
// xiaoming.play();
// console.log(xiaoming);

// typeof, constructor,instanceof,Object.prototype.toString.call(Obj)

console.log(typeof xiaoming);
console.log(xiaoming.constructor == Student);
console.log(xiaoming instanceof Student);

console.log(Object.prototype.toString.call(xiaoming));
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call('1'));
console.log(Object.prototype.toString.call(() => {}));
console.log(Object.prototype.toString.call(null));
