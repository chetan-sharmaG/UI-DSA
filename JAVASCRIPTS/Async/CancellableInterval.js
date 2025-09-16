/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
function setCancellableInterval(callback, delay, ...args) {
  let interval = setInterval(callback, delay, ...args);
  return () => {
    clearInterval(interval);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 10);
// t = 10: i is 1
// t = 20: i is 2
setTimeout(() => {
  cancel();
  console.log(i);
}, 29);
// Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.
