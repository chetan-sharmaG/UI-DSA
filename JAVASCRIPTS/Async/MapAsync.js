/* 
By now you'd be familiar with mapping of elements in an array. If you aren't, please first do the Array.prototype.map question first.

What if the mapping function is not a synchronous function i.e. it returns a promise? Array.prototype.map assumes the mapping function is synchronous and will fail to work properly.

Implement a function mapAsync that accepts an array of items and maps each element with an asynchronous mapping function. The function should return a Promise which resolves to the mapped results.

const asyncDouble = (x: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
*/

/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
 function mapAsync(iterable, callbackFn) {
  return new Promise((resolve,reject)=>{
    let results = new Array(iterable.length)
    let unreached = iterable.length
    if(unreached === 0){
        resolve(results)
        return;
    }
    iterable.forEach(async(item,index)=>{
        try{
            let val = await callbackFn(item,index,iterable)
            results[index]=val
            unreached--;
            if(unreached===0){
                resolve(results)
            }
        }catch(err){
            results[index]=err
            reject(results)
        }
    })
  })
}

const asyncDouble = (x) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]
