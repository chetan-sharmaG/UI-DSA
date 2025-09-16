const results = await mapAsyncLimit(
  ["foo", "bar", "qux", "quz"],
  fetchUpperCase,
  2
);
console.log(results);
/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */
async function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const arr = [];
  for (let i = 0; i < iterable.length; i += size) {
    let chunk = iterable.slice(i,i+size);
    let chunkRe = await Promise.all(chunk.map(callbackFn))
    arr.push(...chunkRe)
  }
  return arr
}

async function fetchUpperCase(q) {
  // Fake API service that converts a string to uppercase.
  try {
    const res = await fetch("https://uppercase.com?q=" + encodeURIComponent(q));
    return q.toUpperCase();
  } catch (e) {
    return q.toUpperCase();
  }
}

// Only a maximum of 2 pending requests at any one time.
