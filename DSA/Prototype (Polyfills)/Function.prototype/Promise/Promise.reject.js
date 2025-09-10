function promiseReject(value){
    return new Promise((_,reject)=>reject(value))
}

console.log(promiseReject('abc'))