// ===== Named Function =====
function greet(name) {
  return "Hello, " + name;
}
console.log("Named function:", greet("John"));

// ===== Anonymous Function (assigned to variable) =====
const sayHi = function (name) {
  return "Hi, " + name;
};
console.log("Anonymous function:", sayHi("Jane"));

// ===== Function Expression (can be named or anonymous) =====
const add = function sum(a, b) {
  return a + b;
};
console.log("Function expression:", add(5, 3));

// ===== Arrow Function (anonymous shorthand) =====
const multiply = (a, b) => a * b;
console.log("Arrow function:", multiply(4, 2));

// ===== Immediately Invoked Function Expression (IIFE) =====
(function () {
  console.log("IIFE executed immediately!");
})();
