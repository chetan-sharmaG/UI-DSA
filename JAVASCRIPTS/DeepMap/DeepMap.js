function deepMap(value, fn) {
  if(typeof value ==='string') return fn(value)
  else if(typeof value ==='number') return fn(value)
  else if(Array.isArray(value)){
    return value.map(val=>fn(val))
  }
  
    let a = Object.entries(value).map(([key,val])=>[key,deepMap(val,fn)])
    return Object.fromEntries(a)

}

const double = (x) => x * 2;

console.log(deepMap(2, double)); // 4
console.log(deepMap([1, 2, 3], double)); 
console.log(deepMap({ a: 1, b: 2, c: 3 }, double))