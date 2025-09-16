function range(startNumber = 0, endNumber, step = 1) {
  if (endNumber === undefined) {
    endNumber = startNumber;
    startNumber = 0;
  }
  if(step===0){
    console.log(new Array(endNumber - startNumber).fill(startNumber))
    return;
  }
  const isNegative = endNumber < 0;
  const arr = [];
  for (let i = startNumber; i < Math.abs(endNumber); i += step) {
    arr.push(i);
  }
  console.log(isNegative ? arr.map(v=>-v) : arr)
}

// range(4); // => [0, 1, 2, 3]

// range(-4); // => [0, -1, -2, -3]

// range(1, 5); // => [1, 2, 3, 4]

// range(0, 20, 5); // => [0, 5, 10, 15]

// range(0, -4, -1); // => [0, -1, -2, -3]

range(1, 4, 0); // => [1, 1, 1]
