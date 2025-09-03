
// Simple counter variable
let i = 0;

// Function to increment the counter
function increment() {
  i++;
}

// Debounce function: delays execution of 'func' until after 'wait' ms have passed since the last call
export function debounce(func, wait) {
  let timer; // 'timer' holds the timeout ID

  // Returned function is the debounced version of 'func'
  return function (...args) {
    // clearTimeout: cancels any previously scheduled execution
    clearTimeout(timer);

    // setTimeout: schedules 'func' to run after 'wait' ms
    // func.apply(this, args): calls 'func' with the current 'this' context and arguments
    timer = setTimeout(() => func.apply(this, args), wait);
  };
}

// Create a debounced version of 'increment'
const debouncedIncrement = debounce((increment), 100);

// Call the debounced function. 'increment' will run after 100ms.
debouncedIncrement();
debouncedIncrement();

// After 150ms, log the value of 'i' (should be 1)
setTimeout(() => console.log(i), 150);

/*
----------------------------
Concept Explanations:
----------------------------

1. timer:
   - Variable that stores the timeout ID returned by setTimeout.
   - Used to track and clear scheduled executions.

2. clearTimeout(timer):
   - Cancels the previously scheduled setTimeout if it exists.
   - Ensures that only the latest call to the debounced function will execute 'func'.

3. setTimeout(() => func.apply(this, args), wait):
   - Schedules 'func' to run after 'wait' milliseconds.
   - The arrow function ensures 'func' is called with the correct arguments.

4. func.apply(this, args):
   - Invokes 'func' with the current 'this' context and the arguments passed to the debounced function.
   - 'apply' allows passing an array of arguments to the function.

5. this:
   - Refers to the context in which the debounced function is called.
   - Using 'apply' ensures that 'func' receives the correct context, which is important for methods that rely on 'this'.

----------------------------
How Debounce Works:
----------------------------

- Each time the debounced function is called, it resets the timer.
- Only after 'wait' ms of inactivity will the original function ('increment') be executed.
- Useful for limiting the rate at which a function is called, e.g., handling user input events.

*/
