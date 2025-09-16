export default function once(func) {
  let run = false
  let value1 = null

  return function (value) {
    if(!run){
        value1 = func(value)
        run=true
        console.log(value1)
    }
    console.log(value1)
}
}
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); // i is still 4 as it is not modified. However, the function returns the result of the first invocation, which is 3.
