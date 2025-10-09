// Given an array of numbers, return an array where each number is doubled using `.map()`.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function doubleTheNum(num) {
  let arr1 = num.map((a) => a * 2);
  console.log(arr1);
}

function askInput() {
  rl.question("Enter the array elements ", (input1) => {
    let arr1 = input1.trim().split(" ");
    let arr2 = arr1.every((a) => a !== "" && !isNaN(a));
    if (!arr2) {
      console.log("Enter the number only : ");
      return askInput();
    } else {
      let numArr = arr1.map(Number);
      doubleTheNum(numArr);
    }
  });
}
askInput();
