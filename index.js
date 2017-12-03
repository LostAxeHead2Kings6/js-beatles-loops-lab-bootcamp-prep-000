function theBeatlesPlay(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    console.log("${arr1[i]} plays ${arr2[i]}")
  }
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i = i + 1;
  }
  return arr;
}
