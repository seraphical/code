const arr = [1, 2, 3, 8, 4, 3, 1, 3, 4, 5, 6, 3, 2, 1, 3, 4, 5];

// let niyouduixiang = [...new Set(arr)];
// console.log(niyouduixiang);
// first question : why I need to use [] ?
// second : I think const is ok right?

//show you something different /

let sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr, 'sortedArrsortedArr');
let pointer1 = 0;
let pointer2 = 1;
const hahaha = [];
sortedArr.forEach({pointer1,pointer2} => {

    if(sortedArr[pointer1] !== sortedArr[pointer2]) {
        hahaha.push(sortedArr[pointer1]);
        pointer1++
        pointer2++
    }else {
        pointer1++
        pointer2++
    }
} return hahaha);
