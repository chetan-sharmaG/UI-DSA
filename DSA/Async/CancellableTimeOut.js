/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
 function setCancellableTimeout(callback, delay, ...args) {
  let timerId = setTimeout(callback,delay,...args)
  return ()=>{
    clearTimeout(timerId)
  }
}