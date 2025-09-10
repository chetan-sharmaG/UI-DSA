/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */

function promiseTimeout(promise, duration) {
  const timer = new Promise((_, reject) => {
    setTimeout(() => reject("Promise timeout"), duration);
  });

  return Promise.race([promise, timer]);
}
function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

const response = await promiseTimeout(fakeFetch(1000), 2500); // change 2500 to value less than 1000 to see error
console.log(response); // Data successfully fetched!
