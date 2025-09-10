function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach(async (item) => {
      try {
        let val = await item;
        resolve(val);
      } catch (e) {
        reject(e);
      }
    });
  });
}

const p0 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject(10),100)
});
const p1 = Promise.resolve(21);

let a = await promiseRace([p0, p1]);
console.log(a);
