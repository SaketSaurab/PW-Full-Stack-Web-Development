// Given an array, rotate it right by 1 position.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rotateArray(arr) {
  let part1 = arr.slice(-1);
  let part2 = arr.slice(0, arr.length - 1);
  console.log(`Rotated array : ${part1.concat(part2)}`);
}

function askInput() {
  rl.question("Enter the arra elements : ", (input1) => {
    const arr1 = input1.trim().split(" ");
    const allNumber = arr1.every((val) => val !== "" && !isNaN(val));
    if (!allNumber) {
      console.log("Enter valid number : ");
      return askInput();
    }
    const arr2 = arr1.map(Number);
    rotateArray(arr2);
  });
}

askInput();
