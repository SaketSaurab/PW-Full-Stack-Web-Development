// Implement binary search
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binarySearch(input, e) {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (input[mid] == e) {
      return console.log(`element ${e} is present at index ${mid}`);
    } else if (input[mid] < e) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(`Element ${e} is not found `);
}

rl.question("Input the array : ", (input) => {
  rl.question("Enter the element to search : ", (e) => {
    let arr = input.split(" ").map(Number);
    let a = Number(e);
    if (arr.some(isNaN) || isNaN(a)) {
      console.log("Enter valid input");
      rl.close();
    } else {
      binarySearch(arr, a);
      rl.close();
    }
  });
});
