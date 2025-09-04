Array.prototype.myAt = function (index) {
  const pIndex = index;
  if (pIndex < 0) {
    return this[this.length + pIndex];
  }
  return this[pIndex];
};

const arr = [42, 79];
console.log(arr.myAt(-3));
