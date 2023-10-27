// var bubbleSort = function (array) {
//   // Your code here.
//   let first = 0,
//     second = first + 1,
//     max = Math.max(...array);
//   const fn2 = () => {
//     for (; second < array.length; second++) {
//       if (array[first] > array[second]) {
//         [array[first], array[second]] = [array[second], array[first]];
//         first++, second++;
//       }
//       if (array[second] !== max && second === array.length - 1) {
//         first = 0;
//         second = first + 1;
//         fn2();
//       } else {
//         return array;
//       }
//     }
//   };
// };

// var bubbleSort = function (array) {
//   let first = 0,
//     second = 1;

//   (() => {
//     while (second < array.length) {
//       if (array[first] > array[second]) {
//         [array[first], array[second]] = [array[second], array[first]];
//         first++;
//         second++;
//       } else {
//         second++;
//         if (second === array.length) {
//           first = 0;
//           second = first + 1;
//           fn2();
//         }
//       }
//     }
//   })()
// //   return fn2();
// };

// console.log(bubbleSort([1, 5, 9, 4, 7]));

//~ do..while
// let a = 2;
// do {
//   console.log("i'm in");
//   a++;
// } while (a < 10);

//do...while 无论如何默认都会执行一遍 do 里面的语句

//~bubble
var bubbleSort = function (array) {
  let swapped;
  do {
    swapped = false; //有序
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // 使用解构赋值来交换元素
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true; //无序
      }
    }
  } while (swapped); //swapped=true 的时候代表无序,所以继续执行

  return array;
};
