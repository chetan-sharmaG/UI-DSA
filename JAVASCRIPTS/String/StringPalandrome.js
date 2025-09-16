/**
 * @param {string} str
 * @return {boolean}
 */
export default function isStringPalindrome(str) {
  let cleaned = str.replace(/[^A-Za-z]/g, "");
  let reverse = Array.from(cleaned).reverse().join("");

  return cleaned === reverse;
}

console.log(isStringPalindrome("tab a cat"));
