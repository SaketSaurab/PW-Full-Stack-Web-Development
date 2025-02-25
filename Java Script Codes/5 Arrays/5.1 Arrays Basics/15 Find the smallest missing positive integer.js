// Find the smallest missing positive integer.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function arraySorting(input) {
  let arr = input;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

function missing(input) {
  let arr = input.filter((input) => input > 0);
  let sortedArr = arraySorting(arr);
  let smallestMissing = 1;

  for (let num of sortedArr) {
    if (num == smallestMissing) {
      smallestMissing++;
    } else if (num > smallestMissing) {
      break;
    }
  }
  console.log(`Smallest missing number is : ${smallestMissing}`);
}
rl.question("Enter the array elements ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  missing(arr);
  rl.close();
});
