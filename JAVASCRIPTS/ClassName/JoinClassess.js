/**
 * Combines class names from various argument types into a single string.
 * Handles strings, arrays, and objects (for conditional classes).
 *
 * @param  {...any} args - Any number of arguments: strings, arrays, objects, etc.
 * @returns {string} - A space-separated string of class names.
 */
export function classNames(...args) {
  return args
    .flatMap(arg => {
      // If arg is a non-empty string, include it.
      if (typeof arg === 'string' && arg) return arg;

      // If arg is an array, recursively process its elements.
      else if (Array.isArray(arg)) {
        return classNames(...arg);
      }

      // If arg is a non-null object, include keys with truthy values.
      else if (typeof arg === 'object' && arg !== null) {
        return Object.keys(arg).filter(key => arg[key]);
      }

      // For all other cases (null, undefined, false, etc.), return empty array.
      return [];
    })
    .join(' ').trim(); // Join all class names with a space.
}

// ---------------------------------------------
// Example usage and explanation
// ---------------------------------------------

console.log(classNames(null, false, 'bar', undefined, { baz: null }, '')); // Output: 'bar'

/*
How the function processes the input:
1. null         -> []
2. false        -> []
3. 'bar'        -> 'bar'
4. undefined    -> []
5. { baz: null} -> [] (since baz is falsy)
6. ''           -> []

Result: ['bar'] -> 'bar'
*/

// ---------------------------------------------
// Concept Explanations
// ---------------------------------------------

/*
1. ...args (Rest Parameter):
   - Collects all arguments passed to the function into an array called 'args'.
   - Example: classNames('foo', { bar: true }) -> args = ['foo', { bar: true }]

2. flatMap:
   - Processes each argument and flattens the result into a single array.

3. typeof arg === 'string' && arg:
   - Checks for non-empty strings.

4. Array.isArray(arg):
   - Recursively processes arrays, allowing for nested structures.

5. typeof arg === 'object' && arg !== null:
   - Handles objects, including only keys with truthy values.

6. .join(' '):
   - Joins all valid class names into a single space-separated string.

---------------------------------------------
Practical Use Cases:
---------------------------------------------

- **Conditional class names**: classNames('btn', { 'btn-active': isActive })
- **Combining arrays/objects**: classNames(['foo', 'bar'], { baz: true })
- **Ignoring falsy/empty values**: classNames(null, undefined, '', false)

*/

