// Implement your own `reduce()` function.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function red(input) {
  let sum = input.reduce((total, num) => {
    return total + num;
  }, 0);

  console.log(`The sum of the elements  ${sum}`);
}

function multi(input) {
  let ans = input.reduce((a, b) => a * b, 1);
  console.log(`Multiplication : ${ans}`);
}

function askInput() {
  rl.question("Enter the array input numbers : ", (input1) => {
    let arr1 = input1.trim().split(" ");
    let arr2 = arr1.every((val) => val !== "" && !isNaN(val));
    if (!arr2) {
      console.log("Enter numbers only ");
      return askInput();
    } else {
      let numArr = arr1.map(Number);
      red(numArr);
      multi(numArr);
      rl.close();
    }
  });
}

askInput();
