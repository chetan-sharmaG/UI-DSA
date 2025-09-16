 function promiseWithResolvers() {
  let resolve,reject;
  let promise = new Promise((res,rej)=>{
    reject=rej;
    resolve=res;
  })
  return {promise,resolve,reject}
}
function delayedGreeting(name) {
  const { promise, resolve, reject } = promiseWithResolvers();

  setTimeout(() => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject(new Error("Name is required."));
    }
  }, 1000);

  return promise;
}

delayedGreeting("Alice")
  .then((message) => console.log(message)) // Output: Hello, Alice!
  .catch((error) => console.error(error));

delayedGreeting()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
