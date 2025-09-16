Array.prototype.myFilter = function (callbackFn, thisArg) {
  const arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn.call(thisArg, arr[i], i, this)) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
