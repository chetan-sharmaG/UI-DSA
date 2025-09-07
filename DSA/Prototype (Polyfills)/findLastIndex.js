export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  let index =
    fromIndex < 0
      ? Math.max(array.length + fromIndex, 0)
      : Math.max(fromIndex, array.length - 1);

  while (index >= 0) {
    if (Object.hasOwn(array, index) && predicate(array[index], index, array)) {
      return index;
    }
    index--;
  }
  return -1;
}
const arr = [5, 4, 3, 2, 1]; // Indices: 0, 1, 2, 3, 4

console.log(findLastIndex(arr, (num) => num > 1, 3)); // => 3
