Array.prototype.myConcat = function (...items) {
    let arr = [...this,...items].flat()
    console.log(arr)
};

[1, 2, 3].myConcat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// Alternate Solution
// Array.prototype.myConcat = function (...items) {
//   const newArray = [...this];

//   for (let i = 0; i < items.length; i++) {
//     if (Array.isArray(items[i])) {
//       newArray.push(...items[i]);
//     } else {
//       newArray.push(items[i]);
//     }
//   }

//   return newArray;
// };