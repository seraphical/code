function Student(name) {
  this.name = name;
  this.age = 10;
}

Student.prototype.write = () => {
  console.log('write');
};
Object.prototype.address = 'china';

const jack = new Student('jack');

// isPrototypeOf xx

console.log(Student.prototype.isPrototypeOf(jack));

// 属性, 构造函数里有属性和方法;
// hasOwnProperty
console.log(jack.hasOwnProperty('address'));

// in  会顺着原型链查找  jack.__proto__ ===Student.prototype    Student.prototype.__proto__ == Object.prototype
console.log('address' in jack);
