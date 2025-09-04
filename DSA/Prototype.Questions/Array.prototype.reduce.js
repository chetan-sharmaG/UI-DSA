/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let noInitialValue = initialValue === undefined;
  if (noInitialValue && this.length === 0) {
    throw new TypeError("Error");
  }
  let acc = noInitialValue ? this[0] : initialValue;
  let index = noInitialValue ? 1 : 0;
  for (let i = index; i< this.length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }
  console.log(acc);
};

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
[1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
