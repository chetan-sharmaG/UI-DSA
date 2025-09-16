Function.prototype.MyCall = function (thisArg, ...argsArray) {
  let sym = Symbol();
  let obj = Object(thisArg);
  Object.defineProperty(obj, sym, {
    enumerable: false,
    value: this,
  });
  console.log(Object.getOwnPropertyDescriptors(obj));
  console.log(obj);
  return obj[sym](...argsArray);
};

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
const person = { name: "Alice" };
greet.MyCall(person, "Hello", "!"); // Output: Hello, Alice!
