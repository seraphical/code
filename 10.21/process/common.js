//!判断一个质数
/* 
只能被 1 和自身整除的数
*/

// !   范围是 1-number
const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      //说明不是一个质数
      return console.log('不是一个质数');
    }
  }
  return console.log('是一个质数');
};

isPrime(2);

// 计数器方法
const isPrime = (number) => {
  let count = 0;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      //说明不是一个质数
      count++;
    }
  }

  count ? console.log('不是一个质数') : console.log('是一个质数');
};

isPrime(12);

flag 假设法
const isPrime = (number) => {
  let flag = true;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      //说明不是一个质数
      flag = false;
    }
  }

//   !flag ? console.log('不是一个质数') : console.log('是一个质数');
// };

// isPrime(12);

// 打断循环法
const isPrime = (number) => {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      //说明不是一个质数
      break;
    }
  }

  i < number ? console.log('不是一个质数') : console.log('是一个质数');
};

isPrime(12);
