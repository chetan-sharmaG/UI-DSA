
/**
 * Debounce function with cancel() and flush() methods.
 * Limits how often a function can be called, and adds control to cancel or immediately execute pending calls.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The delay in milliseconds.
 * @returns {Function} Debounced function with .cancel() and .flush() methods.
 */
function debounce(func, wait) {
  let timer = null;     // Stores the timeout ID for scheduled execution.
  let lastArgs = null;  // Stores the latest arguments passed to the debounced function.
  let lastThis = null;  // Stores the latest context ('this').

  // The debounced function that will be returned.
  function debounced(...args) {
    lastArgs = args;    // Save current arguments.
    lastThis = this;    // Save current context.
    clearTimeout(timer); // Cancel any previously scheduled execution.

    // Schedule the function to run after 'wait' ms.
    timer = setTimeout(() => {
      func.apply(lastThis, lastArgs); // Call func with correct context and arguments.
      timer = null;                   // Clear timer after execution.
      lastArgs = null;                // Reset arguments.
      lastThis = null;                // Reset context.
    }, wait);
  }

  // Cancel any pending execution.
  debounced.cancel = function () {
    clearTimeout(timer); // Cancels the timer.
    timer = null;
    lastArgs = null;
    lastThis = null;
  };

  // Immediately execute the pending function if there is one.
  debounced.flush = function () {
    if (timer) {
      clearTimeout(timer); // Cancel the timer.
      func.apply(lastThis, lastArgs); // Execute immediately.
      timer = null;
      lastArgs = null;
      lastThis = null;
    }
  };

  return debounced;
}

// ---------------------------------------------
// Example usage with an increment function
// ---------------------------------------------

let i = 0; // Counter variable.

function increment() {
  i++;
  console.log('i incremented to:', i);
}

// Create a debounced version of increment.
const debouncedIncrement = debounce(increment, 1000);

// Call the debounced function twice in quick succession.
debouncedIncrement(); // Schedules increment after 1s.
debouncedIncrement(); // Cancels previous, schedules increment after 1s.

// Uncomment below to immediately execute pending increment before 1s.
// debouncedIncrement.flush(); // Instantly increments i.

// Uncomment below to cancel the scheduled increment before 1s.
// debouncedIncrement.cancel(); // Prevents increment from running.

// ---------------------------------------------
// Concept Explanations
// ---------------------------------------------

/*
1. timer:
   - Holds the ID returned by setTimeout.
   - Used to track and clear scheduled executions.

2. clearTimeout(timer):
   - Cancels any previously scheduled setTimeout.
   - Ensures only the latest call to the debounced function will execute 'func'.

3. setTimeout(() => func.apply(lastThis, lastArgs), wait):
   - Schedules 'func' to run after 'wait' milliseconds.
   - Uses the latest arguments and context.

4. func.apply(this, args):
   - Invokes 'func' with the correct 'this' context and arguments.
   - 'apply' allows passing an array of arguments.

5. this:
   - Refers to the context in which the debounced function is called.
   - Using 'apply' ensures 'func' receives the correct context.

6. cancel():
   - Cancels any pending execution and resets stored arguments/context.

7. flush():
   - Immediately executes the pending function if scheduled, then resets state.

---------------------------------------------
How Debounce Works in This Example:
---------------------------------------------

- Each time debouncedIncrement() is called, it resets the timer.
- Only the last call within the delay will result in incrementing 'i'.
- flush() allows you to force the increment immediately if a call is pending.
- cancel() lets you abort the scheduled increment if needed.

---------------------------------------------
Practical Use Cases:
---------------------------------------------

- **Debounce**: Useful for limiting the rate of function calls (e.g., user input, API requests).
- **Cancel**: Useful if you need to abort a pending action (e.g., user navigates away).
- **Flush**: Useful if you want to force the action to happen immediately (e.g., user submits a form).

*/

