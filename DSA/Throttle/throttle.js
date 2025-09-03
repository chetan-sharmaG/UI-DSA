
/**
 * Throttle function limits how often 'func' can be called.
 * Ensures 'func' runs at most once every 'wait' milliseconds.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} wait - The minimum delay between calls in milliseconds.
 * @returns {Function} Throttled function.
 */
function throttle(func, wait) {
  let timer = null; // Stores the timeout ID.

  // The throttled function that will be returned.
  return function (...args) {
    // Only run if timer is not active.
    if (timer === null) {
      func.apply(this, args); // Call func with current context and arguments.
      timer = setTimeout(() => {
        timer = null; // Reset timer after 'wait' ms.
      }, wait);
    }
    // If timer is active, ignore the call.
  };
}

// ---------------------------------------------
// Example usage with increment function
// ---------------------------------------------

let i = 0;

function increment() {
  i++;
  console.log(i);
}

// Create a throttled version of increment.
const throttleFunction = throttle(increment, 10);

// Call the throttled function twice quickly.
throttleFunction(); // Executes immediately, i = 1
throttleFunction(); // Ignored, as within 10ms window

// Call again after 20ms (outside throttle window).
setTimeout(() => throttleFunction(), 20); // Executes, i = 2

// ---------------------------------------------
// Concept Explanations
// ---------------------------------------------

/*
1. timer:
   - Holds the ID returned by setTimeout.
   - Used to track the throttle window.

2. setTimeout(() => (timer = null), wait):
   - After 'wait' ms, resets timer so func can be called again.

3. func.apply(this, args):
   - Invokes 'func' with the correct 'this' context and arguments.
   - Ensures any arguments passed to the throttled function are forwarded to 'func'.

4. ...args (Rest Parameters):
   - Syntax in function definition: (...args)
   - Collects all arguments passed to the function into an array.
   - Example: If you call throttleFunction(1, 2, 3), then args = [1, 2, 3].

5. args (Array):
   - Contains all arguments passed to the throttled function.
   - Used to forward those arguments to 'func' via apply.

---------------------------------------------
Difference between ...args and args:
---------------------------------------------

- **...args** (Rest Parameter in function definition):
    - Used in function(...args).
    - Gathers all arguments into an array called 'args'.
    - Example: function(...args) called as function(1, 2, 3) → args = [1, 2, 3].

- **args** (Variable inside function):
    - Refers to the array of arguments gathered by ...args.
    - You use 'args' to access or pass the arguments further (e.g., func.apply(this, args)).

---------------------------------------------
What does args contain in this context?
---------------------------------------------

- In the throttled function, args contains all arguments passed when calling throttleFunction.
- If you call throttleFunction('a', 'b', 'c'), then args = ['a', 'b', 'c'].
- These are forwarded to the original func using func.apply(this, args).

---------------------------------------------
How Throttle Works in This Example:
---------------------------------------------

- throttleFunction() runs increment() immediately on the first call.
- Any subsequent calls within the next 10ms are ignored.
- After 10ms, throttleFunction() can run increment() again.

---------------------------------------------
Practical Use Cases:
---------------------------------------------

- **Throttle**: Useful for limiting the rate of function calls (e.g., scroll events, window resizing, API polling).
*/

