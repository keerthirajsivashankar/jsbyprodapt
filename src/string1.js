// ===== STRING METHODS DEMO =====

let str = "Hello JavaScript";

// Length
console.log("Length:", str.length);

// Access characters
console.log("Char at 1:", str.charAt(1));
console.log("Char code at 1:", str.charCodeAt(1));

// Substring methods
console.log("Slice:", str.slice(0, 5));
console.log("Substring:", str.substring(0, 5));
console.log("Substr:", str.substr(0, 5));

// Case conversion
console.log("Upper:", str.toUpperCase());
console.log("Lower:", str.toLowerCase());

// Search methods
console.log("IndexOf 'Java':", str.indexOf("Java"));
console.log("LastIndexOf 'a':", str.lastIndexOf("a"));
console.log("Includes 'Script':", str.includes("Script"));
console.log("StartsWith 'Hello':", str.startsWith("Hello"));
console.log("EndsWith 'Script':", str.endsWith("Script"));

// Replace
console.log("Replace:", str.replace("JavaScript", "World"));

// Trim
let spaced = "   padded text   ";
console.log("Trim:", spaced.trim());
console.log("TrimStart:", spaced.trimStart());
console.log("TrimEnd:", spaced.trimEnd());

// Repeat
console.log("Repeat:", "Hi!".repeat(3));

// Split
console.log("Split:", str.split(" "));

// Match & Search with regex
console.log("Match:", str.match(/Java/));
console.log("Search:", str.search(/Script/));

// Pad
console.log("PadStart:", "5".padStart(3, "0"));
console.log("PadEnd:", "5".padEnd(3, "0"));

// Template literals
let name = "John";
console.log(`Hello, ${name}!`);

console.log(str.slice(0, 5)); // Hello
console.log(str.substring(0, 5)); // Hello
console.log(str.substr(0, 5)); // Hello
