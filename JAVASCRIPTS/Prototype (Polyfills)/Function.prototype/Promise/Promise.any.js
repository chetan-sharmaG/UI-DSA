export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unreached = iterable.length;
    if (unreached === 0) {
      reject(new AggregateError([]));
    }
    iterable.forEach(async (item, index) => {
      try {
        let value = await item;
        resolve(value);
      } catch (e) {
        results[index] = e;
        unreached -= 1;
        if (unreached === 0) {
          reject(new AggregateError(results));
        }
      }
    });
  });
}

// const p0 = Promise.reject(42);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(21);
//   }, 100);
// });

// let a = await promiseAny([p0, p1]);
// console.log(a);

const p0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Err!");
  }, 100);
});

const p3 = Promise.reject(1);
const p2 = Promise.resolve(1);

try {
  let a = await promiseAny([p0, p1, p3]);
  console.log(a);
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors); // [ 42, "Err!" ]
}
