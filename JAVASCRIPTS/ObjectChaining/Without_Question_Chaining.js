function get(objectParam, pathParam, defaultValue) {
  let path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let index = 0;
  let length = path.length;
  let obj = objectParam;

  while (obj != null && index < length) {
    obj = obj[String(path[index])];
    index++;
  }
  const val = index && index === length ? obj : undefined;

  return val !== undefined ? val : defaultValue;
}

const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};
console.log(get(john, ["profile", "name", "lastName"]));
