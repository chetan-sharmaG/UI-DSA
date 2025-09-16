/**
 * @param {Function} func
 * @returns Function
 */
 function memoize(func) {
    // we can use object as well but went with map because object stores keys as string 
  let cache = new Map()
  return function(value){
    if(cache.has(value)){
      return cache.get(value)
    }
    let result = func.call(this,value)
    cache.set(value,result)
    return result
  }
}

function expensiveFunction(n) {
  console.log('Computing...');
  return n * 2;
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction('5')); // Output: 10

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveFunction(10)); // Output: 20