let a = { foo: 'bar', bar: [1, 2, 3] }

let arr = Object.entries(a)
console.log(arr)
console.log(Object.fromEntries(arr))

