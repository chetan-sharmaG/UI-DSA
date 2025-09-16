function intersection(...arrays) {
  let firstArr = arrays[0];
  let unique = [];
  let seen = new Set();
  for (const arr of firstArr) {
    if (!seen.has(arr)) {
      unique.push(arr);
      seen.add(arr);
    }
  }
  return unique.filter(item=>arrays.slice(1).every(ar=>ar.includes(item)))
}
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5,2];

console.log(intersection(arr1, arr2, arr3))
