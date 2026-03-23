console.log(Number("123")); // 123
console.log(parseInt("123px")); // 123
console.log(parseFloat("12.34")); // 12.34
console.log(+"456"); // 456 (unary plus)

let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hi")); // true

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
