Array.prototype.myAt = function (index) {
  const pIndex = index;
  const isValidLength = index<0 ? this.length + index : index
  if(isValidLength>this.length){
    return ;
  }
  if (pIndex < 0) {
    return this[this.length + pIndex];
  }
  return this[pIndex];
};

const arr = [42,, 79];
console.log(arr.myAt(10));
