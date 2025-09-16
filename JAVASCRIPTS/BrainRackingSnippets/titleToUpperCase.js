function upperCase(str) {
  console.log(str.replace(/\b\w/gi, (val) => val.toLocaleUpperCase()));
}

upperCase("hello friends thIs is chetan");
