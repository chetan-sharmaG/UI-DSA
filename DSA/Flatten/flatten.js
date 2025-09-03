function flatten(array) {
  return array.flatMap((arr) => {
    if (Array.isArray(arr)) {
      return flatten(arr);
    }
    return arr;
  });
}

console.log(flatten([1, 2, 3]));
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
