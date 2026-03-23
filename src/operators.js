// ===== OPERATORS DEMO =====

// Arithmetic
console.log("Add:", 5 + 3);
console.log("Subtract:", 5 - 3);
console.log("Multiply:", 5 * 3);
console.log("Divide:", 5 / 3);
console.log("Modulus:", 5 % 3);
console.log("Exponent:", 5 ** 2);

// Assignment
let x = 10;
x += 5; // add and assign
console.log("x after += 5:", x);
x -= 3;
console.log("x after -= 3:", x);
x *= 2;
console.log("x after *= 2:", x);
x /= 4;
console.log("x after /= 4:", x);

// Comparison / Equality
console.log("== :", 5 == "5"); // true (loose)
console.log("=== :", 5 === "5"); // false (strict)
console.log("!= :", 5 != "5"); // false
console.log("!== :", 5 !== "5"); // true
console.log("> :", 10 > 5);
console.log("< :", 10 < 5);
console.log(">= :", 10 >= 10);
console.log("<= :", 5 <= 10);

// Logical
console.log("AND:", true && false);
console.log("OR:", true || false);
console.log("NOT:", !true);

// Conditional (ternary)
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Bitwise
console.log("AND:", 5 & 3); // 1
console.log("OR:", 5 | 3); // 7
console.log("XOR:", 5 ^ 3); // 6
console.log("NOT:", ~5); // -6
console.log("Left shift:", 5 << 1); // 10
console.log("Right shift:", 5 >> 1); // 2
console.log("Unsigned right shift:", -5 >>> 1);

// Increment / Decrement
let y = 5;
console.log("y++:", y++); // prints 5 then increments
console.log("++y:", ++y); // increments then prints

// typeof & instanceof
console.log("typeof 123:", typeof 123);
console.log("typeof 'abc':", typeof "abc");
console.log("typeof true:", typeof true);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);

function Person(name) {
  this.name = name;
}
let p = new Person("John");
console.log("p instanceof Person:", p instanceof Person);
