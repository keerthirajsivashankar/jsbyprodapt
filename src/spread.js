//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge arrays
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Chennai" };

console.log(updatedUser);
// { name: "Alice", age: 26, city: "Chennai" }

//rest operator

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

const person = { name: "Bob", age: 30, department: "IT", city: "Chennai" };

const { name, age, ...rest } = person;

console.log(name); // Bob
console.log(age); // 30
console.log(rest); // { department: "IT", city: "Chennai" }
