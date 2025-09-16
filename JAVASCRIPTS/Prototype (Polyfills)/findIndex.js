
export default function findIndex(array, predicate, fromIndex = 0) {
  let index = fromIndex < 0 ? array.length + fromIndex : fromIndex;
  for (let i = index; i < array.length; i++) {
    if (Object.hasOwn(array, i) && predicate(array[i])) {
        return i;
    }
  }
  return -1;
}

console.log(findIndex([4, 12, 0, 8, 0,130, 44], (num) => num === 0,2));
