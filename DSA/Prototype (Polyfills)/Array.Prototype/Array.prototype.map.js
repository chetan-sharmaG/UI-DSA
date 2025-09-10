Array.prototype.myMap = function (callbackFn, thisArg) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(arr, i)) newArr.push(callbackFn.call(thisArg, arr[i], i));
  }
  console.log(newArr);
};

[1, 2, 3, , 4].myMap((i) => i * i); // [1, 2, 3, 4]
