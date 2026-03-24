let array1 = ["sTandarD", "CharTered", "banK"];

let array2 = array1.map((element) => {
  return element.toUpperCase();
});

console.log(array2); // ["STANDARD", "CHARTERED", "BANK"]

let index = 0;
array1.forEach((element, index) => {
  array1[index] = element.toUpperCase();
});
console.log(array1);
