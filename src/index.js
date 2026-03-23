// ===== VAR vs LET vs CONST =====

// Redeclaration
var a = 1;
var a = 2; // ✅ allowed
console.log("var redeclare:", a);

let b = 1;
// let b = 2; // ❌ SyntaxError if uncommented
console.log("let redeclare not allowed");

const c = 1;
// const c = 2; // ❌ SyntaxError if uncommented
console.log("const redeclare not allowed");

// Reassignment
var x = 10;
x = 20; // ✅ works
console.log("var reassign:", x);

let y = 10;
y = 20; // ✅ works
console.log("let reassign:", y);

const z = 10;
// z = 20; // ❌ TypeError if uncommented
console.log("const reassign not allowed");

// Hoisting
console.log("var hoist:", hoistedVar); // ✅ undefined
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = "I am in TDZ";

// console.log(hoistedConst); // ❌ ReferenceError
const hoistedConst = "I am also in TDZ";

// ===== DATA TYPES =====

// Number
let num = 42;
console.log("Number:", num);
console.log("Type of num:", typeof num);

// String
let str = "Hello JS";
console.log("String:", str);
console.log("Type of str:", typeof str);

// Boolean
let bool = true;
console.log("Boolean:", bool);
console.log("Type of bool:", typeof bool);

// Null
let empty = null;
console.log("Null:", empty);
console.log("Type of empty:", typeof empty); // Note: typeof null is "object" (legacy quirk)

// Undefined
let undef;
console.log("Undefined:", undef);
console.log("Type of undef:", typeof undef);

// Object
let obj = { name: "John", age: 30 };
console.log("Object:", obj);
console.log("Type of obj:", typeof obj);

// Array
let arr = [1, 2, 3];
console.log("Array:", arr);
console.log("Type of arr:", typeof arr); // Note: typeof array is "object"

// Function
function greet() {
  return "Hi!";
}
console.log("Function:", greet());
console.log("Type of greet:", typeof greet);

// Symbol
let sym = Symbol("id");
console.log("Symbol:", sym);
console.log("Type of sym:", typeof sym);

// BigInt
let big = 123456789012345678901234567890n;
console.log("BigInt:", big);
console.log("Type of big:", typeof big);
