// 找到数组中最先出现偶数次的一项
var evenOccurrence = function (arr) {
  // Your code here.
  //[[1],[7],[2],[4,4],[5],[6,6],[8],[9];
  let result = [];
  // arr[0] - > find if not same -> push to single and single send result;
  // -> if same -> push other to single- > finally push itself and send result;
  // and then iterate every single;
  for (var i = 0; i < arr.length; i++) {
    let everysingle = [];
    for (var a = i + 1; a < arr.length; a++) {
      if (arr[i] === arr[a]) {
        //[1,  , , 7, 2, 4, 5, 6, 8, 9, 6, 4]
        everysingle.push(arr[a]); // [1,1,1]
        delete arr[a]; //?
      }
    }
    everysingle.push(arr[i]);
    result.push(everysingle); //[[1,1,1],]
    a++;
  }

  [[1,1,1],[7],[2],[4,4],[8,8]...]
  var finalresult ;
  // console.log(finalresult);
  for (var i = 0; i < result.length; i++) {
    // console.log(result[i]);  []
    if (result[i].length&&result[i].length % 2 === 0) {
      if(finalresult) return
      finalresult =  result[i][0]
    }
  }

};
var onlyEven = evenOccurrence([1, 1, 1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
