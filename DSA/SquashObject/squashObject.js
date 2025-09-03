/**
 * Recursively traverses a nested object and returns an array of [path, value] pairs,
 * where each path is a dot-separated string representing the location of the value.
 *
 * @param {Object} obj - The object (or value) to traverse.
 * @param {Array} [path=[]] - The path taken so far, as an array of keys.
 * @returns {Array} An array of [path, value] pairs.
 *
 * @example
 * traverse({ a: 1, b: { c: 2 } });
 * // Returns: [['a', 1], ['b.c', 2]]
 */
function traverse(obj, path = []) {
  if (typeof obj !== "object" || obj === null) {
    return [path.join("."), obj];
  }
  return Object.entries(obj).flatMap(([key, value]) => {
    const newPath = key === "" ? [...path] : [...path, key];
    return traverse(value, newPath);
  });
}

/**
 * Splits an array into subarrays of length 2.
 * Used to convert a flat array of alternating keys and values into [key, value] pairs.
 *
 * @param {Array} arr - The array to split.
 * @returns {Array} An array of arrays, each containing two elements.
 *
 * @example
 * chunck(['a', 1, 'b', 2]);
 * // Returns: [['a', 1], ['b', 2]]
 */
function chunck(arr) {
  let res = [];
  while (arr.length) {
    res.push(arr.splice(0, 2));
  }
  return res;
}

/**
 * Flattens a nested object into a single-level object with dot-separated keys.
 * Logs the resulting flattened object to the console.
 *
 * @param {Object} obj - The nested object to flatten.
 *
 * @example
 * squashObject({ a: 1, b: { c: 2 } });
 * // Logs: { a: 1, 'b.c': 2 }
 */
function squashObject(obj) {
  const flatten = traverse(obj);
  const result = Object.fromEntries(chunck(flatten));
  console.log(result);
}

// Example usage:
const o1 = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(o1);
// Output: { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
