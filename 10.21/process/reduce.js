const a = [1, 2, 3];
// a.forEach((item) => {
//   if (item == 1) return; // 真值缩小, 相比于 if else 更推荐使用真值缩小
//   console.log(item);
// });

// ! 数组的有回调,涉及到遍历的方法都不能使用 break 和 continue 进行控制

a.forEach((item) => {
  if (item == 2) throw new Error(); // 真值缩小, 相比于 if else 更推荐使用真值缩小
  console.log(item);
});
