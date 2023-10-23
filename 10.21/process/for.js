const arr = [1, 2, 3, 4, 5];
~ 不打印 4 ,只打印 1,2,3,5
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 4) continue;
  console.log(arr[i]);
}

//~ 不打印 4 ,只打印 1,2,3

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 4) return;
//   console.log(arr[i]);
// }

//~  break默认只跳出一层循环, 如果要调多层就要添加一个标记
outer: for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == 3) break outer;
    console.log(arr[i], arr[j]);
  }
}
