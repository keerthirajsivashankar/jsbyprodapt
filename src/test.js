import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("8 tables");

for (let i = 1; i <= 12; i++) {
  console.log(`8 x ${i} = ${8 * i}`);
}

console.log("fibonaci series");

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
console.log(fibonacci(10));

// let input1 = parseInt(prompt("Enter first number: "));
// let input2 = parseInt(prompt("Enter second number: "));
// let sum = input1 + input2;

// console.log("Sum:", sum);

let newarray = [
  11, 3, 4, 1, 3, 1, 2, 5, 7, 26, 13, 14, 17, 33, 21, 44, 77, 90, 124, 56, 78,
  34, 23, 45, 67, 89, 12, 9,
];

newarray.forEach((num) => {
  if (num % 2 === 0) {
    console.log("Even number : ", num);
  } else {
    console.log("Odd number :", num);
  }
});

function bubbleSort(arr, rev) {
  if (arr.length <= 1) return arr;

  if (rev === 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
}

bubbleSort(newarray, 0);
console.log("Sorted array:", newarray);

bubbleSort(newarray, 1);
console.log("rev Sorted array:", newarray);

// usinf .sort() method
newarray.sort((a, b) => a - b);
console.log("Sorted array using .sort():", newarray);
