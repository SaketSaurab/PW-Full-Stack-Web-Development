// Write a function that returns the sum of digits of a number
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sumOfDigits(input) {
  let sum = 0;
  let num = input;
  while (input > 0) {
    sum += input % 10;
    input = Math.floor(input / 10);
  }
  console.log(`The sum of digits of ${num} is ${sum}`);
}

rl.question("Enter the number : ", (input) => {
  if (/^-?\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    sumOfDigits(num);
  } else {
    console.log("Enter valid number ");
  }
  rl.close();
});
