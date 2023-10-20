// 找到数组中最先出现偶数次的一项

const even0ccurrence = (arr) => {
  let returnVal = null,
    count = 0,
    flag = false;
  //首先对这个数组去重,就是每个项只出现一次
  let dedupulicateArr = [...new Set(arr)]; //[ 1, 7, 2, 4,5, 6, 8, 9 ] 数组去重

  dedupulicateArr.forEach((item) => {
    arr.forEach((v) => {
      if (item == v && !flag) count++;
    });

    if (count % 2 == 0 && count) {
      returnVal = item;
      count = 0;
      flag = true;
    } else {
      count = 0;
    }
  });

  return returnVal;
};

var onlyEven = even0ccurrence([1, 1, 1, 7, 2, 2, 2, 4, 5, 6, 8, 9, 6, 4]);

console.log(onlyEven);
