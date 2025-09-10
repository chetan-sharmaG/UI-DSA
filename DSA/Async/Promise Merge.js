/**
 * @param {Promise} p1
 * @param {Promise} p2
 * @return {Promise<any>}
 */
async function promiseMerge(p1, p2) {
  return new Promise(async (resolve, reject) => {
    let value1, value2;
    try {
      value1 = await p1;
      value2 = await p2;
      let res = addValues(value1, value2);
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
}
function addValues(v1, v2) {
  if (typeof v1 !== typeof v2) {
    throw "Unsupported data types";
  }
  if (Array.isArray(v1)) {
    return [...v1, ...v2];
  } else if (
    typeof v1 === "object" &&
    v1 != null &&
    v2 != null &&
    Object.prototype === Object.getPrototypeOf(v1)
  ) {
    return { ...v1, ...v2 };
  } else if (typeof v1 === "number") {
    return v1 + v2;
  } else if (typeof v1 === "string") {
    return v1.concat(v2);
  } else throw "Unsupported data types";
}

(async () => {
  let a = await promiseMerge(
    Promise.resolve(new Set([1, 2, 3])),
    Promise.resolve(new Set([4, 5, 6]))
  ); // 3
  console.log("Merged result:", a);
})();
