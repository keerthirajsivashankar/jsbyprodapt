// ===== NUMBER METHODS DEMO =====

// Creating numbers
let num1 = 42;
let num2 = 3.14159;
let num3 = Number("123"); // explicit conversion

console.log("num1:", num1);
console.log("num2:", num2);
console.log("num3:", num3);

// ===== Static Number methods =====

// Check if value is finite
console.log("isFinite(42):", Number.isFinite(42));
console.log("isFinite(Infinity):", Number.isFinite(Infinity));

// Check if value is NaN
console.log("isNaN(NaN):", Number.isNaN(NaN));
console.log("isNaN('abc'):", Number.isNaN("abc")); // false, because it's not a number at all

// Check if integer
console.log("isInteger(42):", Number.isInteger(42));
console.log("isInteger(3.14):", Number.isInteger(3.14));

// Parse integers and floats
console.log("parseInt('123px'):", Number.parseInt("123px"));
console.log("parseFloat('3.14text'):", Number.parseFloat("3.14text"));

// EPSILON (smallest difference between 1 and next representable float)
console.log("Number.EPSILON:", Number.EPSILON);

// MAX and MIN safe integers
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// MAX and MIN values
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);

// ===== Instance methods =====

let n = 1234.567;

// toString
console.log("toString:", n.toString());
console.log("toString(2):", n.toString(2)); // binary
console.log("toString(16):", n.toString(16)); // hex

// toFixed (round to fixed decimals)
console.log("toFixed(2):", n.toFixed(2)); // "1234.57"

// toPrecision (total digits)
console.log("toPrecision(6):", n.toPrecision(6)); // "1234.57"

// toExponential
console.log("toExponential(3):", n.toExponential(3)); // "1.235e+3"

// valueOf
console.log("valueOf:", n.valueOf());

// ===== Global functions (not Number methods but related) =====

// parseInt and parseFloat (global)
console.log("parseInt('101', 2):", parseInt("101", 2)); // binary → 5
console.log("parseFloat('3.14'):", parseFloat("3.14"));

// isNaN and isFinite (global)
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("isFinite(100):", isFinite(100)); // true
