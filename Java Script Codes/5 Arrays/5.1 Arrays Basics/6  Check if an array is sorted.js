//  Check if an array is sorted.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortedArr(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  if (
    isSorted
      ? console.log("The given array is sorted ")
      : console.log("The given array is not sorted")
  );
}

rl.question("Enter the array elements ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  if (arr.every((num) => !isNaN(num))) {
    sortedArr(arr);
  } else {
    console.log("Enter valid elements ");
  }
  rl.close();
});
