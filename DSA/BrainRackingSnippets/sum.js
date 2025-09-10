function sum(...args) {
  const res = args.reduce((acc, curr) => acc + curr, 0);
  const myFunc = (num) => {
    console.log('heelo',num)
    return sum(num, ...args);
  };
  myFunc.value = res;
  return myFunc;
}

// console.log(sum(1, 2, 3, 4).value);
console.log(sum(1)(2)(3).value);
