/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (typeof value != "object" || value == null) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((value) => deepClone(value));
  }
  let value1 = Object.keys(value).map((v) => [v, deepClone(value[v])]);
  return Object.fromEntries(value1);
}

// const obj1 =  [{ a: { id: 'foo' } }, { b: { id: 'baz' } }];
// const clonedObj1 = deepClone(obj1);
// console.log(clonedObj1)
// clonedObj[1].b = { id: 'bax' };
// clonedObj1.user.role; // 'guest'
// obj1.user.role; // Should still be 'admin'.

const obj2 = { foo: [{ bar: "baz" }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = "bax"; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz
