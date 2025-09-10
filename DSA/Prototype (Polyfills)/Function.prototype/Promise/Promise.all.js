export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let result = new Array(iterable.length);
    let unresolved = iterable.length;
    if (unresolved === 0) {
      resolve(result);
      return;
    }
    iterable.forEach(async (item, index) => {
      try {
        let value = await item;
        result[index] = value;
        unresolved -= 1;
        if (unresolved === 0) {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
}

const p0 = Promise.reject(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

let a = await promiseAll([p0, p1, p2]);
console.log(a);
