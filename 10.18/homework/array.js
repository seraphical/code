//@第一题：var arr = [10 ,200 ,100, -5 , 15, 56, 17]，找出这个数组的最大一项

const arr = (array) => {
  // we need sort
  let sortedarray = array.sort((a, b) => a - b); //默认从小到大  默认用字符串比较的
  // we don't need binary search......
  console.log(sortedarray);
  return sortedarray[sortedarray.length - 1]; //找到最大的一个
};

console.log(arr([10, 200, 100, -5, 15, 56, 17]));
