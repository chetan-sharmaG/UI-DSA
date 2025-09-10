Function.prototype.MyApply = function (thisArg, arrArg = []) {
  let sym = Symbol();
  let obj = Object(thisArg);
  Object.defineProperty(obj, sym, {
    enumerable: false,
    value: this,
  });
  return obj[sym](...arrArg);
};

function multiplyAge(multiplier = 1) {
  console.log(this.age * multiplier);
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.MyApply(mary); // 21
multiplyAge.MyApply(john, [2]);
