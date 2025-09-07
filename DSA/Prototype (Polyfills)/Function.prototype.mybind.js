Function.prototype.MyBind = function (thisArg, ...args1) {
  let sym = Symbol();
  let obj = Object(thisArg);
  Object.defineProperty(obj, sym, {
    enumerable: false,
    value: this,
  });
  return function (...args) {
    return obj[sym](...args1, ...args);
  };
};

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const boundGetAge = john.getAge.MyBind(john);
console.log(boundGetAge()); // 42
