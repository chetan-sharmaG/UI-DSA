/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export default function isStringAnagram(str1, str2) {
  let arr1 = JSON.stringify(Array.from(str1).sort())
  let arr2 = JSON.stringify(Array.from(str2).sort())
  return arr1 === arr2
}

console.log(isStringAnagram('abcd', 'dcba'))
console.log(isStringAnagram('hello', 'bello'))