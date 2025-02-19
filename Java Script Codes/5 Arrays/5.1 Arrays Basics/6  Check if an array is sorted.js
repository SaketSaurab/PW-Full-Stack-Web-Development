//  Check if an array is sorted.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortedArr(arr) {}
rl.question("Enter the array elements ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  if (arr.every((num) => !isNaN(num))) {
    sortedArr(arr);
  } else {
    console.log("Enter valid elements ");
  }
  rl.close();
});
