const numbers = [1, 2, 3, 4, 5];

// ===== forEach =====
numbers.forEach((num) => console.log("forEach:", num));

// ===== map =====
const doubled = numbers.map((num) => num * 2);
console.log("map:", doubled);

// ===== filter =====
const evens = numbers.filter((num) => num % 2 === 0);
console.log("filter:", evens);

// ===== reduce =====
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce:", sum);

// ===== find =====
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("find:", firstEven);

// ===== some =====
const hasGreaterThanThree = numbers.some((num) => num > 3);
console.log("some:", hasGreaterThanThree);

// ===== every =====
const allPositive = numbers.every((num) => num > 0);
console.log("every:", allPositive);

// ===== sort =====
const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log("sort:", sortedDesc);

// ===== includes =====
console.log("includes 3:", numbers.includes(3));

// ===== ARRAY METHODS DEMO =====

const arr = [1, 2, 3, 4, 5];

// --- Creation & Checking ---
console.log("Array.isArray:", Array.isArray(arr));
console.log("Array.from('hello'):", Array.from("hello"));
console.log("Array.of(7, 8, 9):", Array.of(7, 8, 9));

// --- Adding & Removing ---
let temp = [...arr];
temp.push(6);
console.log("push:", temp);

temp.pop();
console.log("pop:", temp);

temp.shift();
console.log("shift:", temp);

temp.unshift(0);
console.log("unshift:", temp);

temp.splice(2, 1, 99);
console.log("splice:", temp);

console.log("toSpliced (non-mutating):", arr.toSpliced(2, 1, 99));

console.log("concat:", arr.concat([6, 7]));
console.log("copyWithin:", [1, 2, 3, 4, 5].copyWithin(0, 3));
console.log("fill:", [1, 2, 3].fill(0));

// --- Access & Conversion ---
console.log("length:", arr.length);
console.log("at(-1):", arr.at(-1));
console.log("toString:", arr.toString());
console.log("join('-'):", arr.join("-"));
console.log("slice(1,3):", arr.slice(1, 3));
console.log("flat:", [1, [2, [3]]].flat(2));
console.log(
  "flatMap:",
  [1, 2, 3].flatMap((x) => [x, x * 2]),
);

// --- Searching & Checking ---
console.log("indexOf(3):", arr.indexOf(3));
console.log("lastIndexOf(3):", [1, 3, 3, 5].lastIndexOf(3));
console.log("includes(4):", arr.includes(4));
console.log(
  "find > 3:",
  arr.find((x) => x > 3),
);
console.log(
  "findIndex > 3:",
  arr.findIndex((x) => x > 3),
);
console.log(
  "every > 0:",
  arr.every((x) => x > 0),
);
console.log(
  "some > 4:",
  arr.some((x) => x > 4),
);

// --- Iteration & Transformation ---
arr.forEach((x) => console.log("forEach:", x));
console.log(
  "map:",
  arr.map((x) => x * 2),
);
console.log(
  "filter:",
  arr.filter((x) => x % 2 === 0),
);
console.log(
  "reduce:",
  arr.reduce((acc, x) => acc + x, 0),
);
console.log(
  "reduceRight:",
  arr.reduceRight((acc, x) => acc - x, 15),
);
console.log(
  "sort:",
  [...arr].sort((a, b) => a - b),
);
console.log("reverse:", [...arr].reverse());

// --- Utility Iterators ---
console.log("keys:", [...arr.keys()]);
console.log("values:", [...arr.values()]);
console.log("entries:", [...arr.entries()]);
