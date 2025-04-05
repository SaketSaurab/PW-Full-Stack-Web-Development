// Basic array tasks like finding max and min
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maxMin(input) {
  let arr = input.trim().split(/\s+/).map(Number);
  if (arr.some(isNaN)) {
    console.log("Enter valid number");
    return;
  }
  let big = arr[0];
  let small = arr[0];
  console.log("The given array : ", arr);
  for (let i = 1; i < arr.length; i++) {
    if (big < arr[i]) {
      big = arr[i];
    }
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  console.log(`Bigger number is ${big} and smaller number is ${small}`);
}

rl.question("Enter arrray : ", (input) => {
  maxMin(input);
  rl.close();
});
