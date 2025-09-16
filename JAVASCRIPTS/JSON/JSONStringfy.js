export default function jsonStringify(value) {
  if (typeof value === "string") return `"${value}"`;
  else if (Array.isArray(value)) {
    const arr = value.map((item) => jsonStringify(item));
    return `[${arr.join(",")}]`;
  } else if (typeof value == "object" && value !== null) {
    const obj = Object.entries(value).map(([key, value]) => {
      return `"${key}":${jsonStringify(value)}`;
    });
    return `{${obj.join(",")}}`;
  } else return String(value);
}

console.log(jsonStringify({ foo: "bar" })); // '{"foo":"bar"}'
console.log(jsonStringify({ foo: "bar", bar: [1, 2, 3] })); // '{"foo":"bar","bar":[1,2,3]}'
console.log(jsonStringify({ foo: true, bar: false })); // '{"foo":true,"bar":false}'
