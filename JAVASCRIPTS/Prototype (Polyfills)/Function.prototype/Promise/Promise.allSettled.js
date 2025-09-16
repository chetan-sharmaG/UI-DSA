export default function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;
    if (unresolved === 0) {
      results[0] = {
        status: "fulfilled",
        value: [],
      };
      reject([
        {
          status: "fulfilled",
          value: [],
        },
      ]);
      return;
    }
    iterable.forEach(async (item, index) => {
      try {
        let value = await item;
        results[index] = {
          status: "fulfilled",
          value,
        };
      } catch (e) {
        results[index] = {
          status: "rejected",
          reason: e,
        };
      } finally {
        unresolved -= 1;
        if (unresolved === 0) {
          resolve(results);
        }
      }
    });
  });
}

const p0 = Promise.reject(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("foo");
  }, 100);
});

let a = await promiseAllSettled([p0, p1, p2]);
console.log(a);
