/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
function listFormat(items, options) {
  if (items.length === 1) {
    return items.toString();
  }
  if (items.length == 0) {
    return "";
  }
  let cleanedArr = items.filter((value) => value !==null && value!="");
  if (options?.sorted) {
    cleanedArr.sort();
  }
  if (options?.unique) {
    cleanedArr = cleanedArr.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }
  if (options?.length) {
    let firstNValues = cleanedArr.splice(0, options.length).join(",");
    let lastNValuesLenght = cleanedArr.length;
    console.log(
      `${firstNValues} and ${lastNValuesLenght} ${
        lastNValuesLenght > 1 ? "others" : "other"
      }`
    );
    return;
  }
  let value = cleanedArr.splice(0, cleanedArr.length - 1).toString();

  console.log(`${value} and ${cleanedArr.toLocaleString()}`);
}

// listFormat([]); // ''

listFormat(["Bob",'']); // 'Bob'
// listFormat(["Bob", "Alice"]); // 'Bob and Alice'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John"]);
// // 'Bob, Ben, Tim, Jane and John'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(["Bob", "Ben", "", "", "John"]); // 'Bob, Ben and John'
