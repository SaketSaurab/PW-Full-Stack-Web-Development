// Write a function that returns the sum of two numbers.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(a, b) {
  console.log(`The sum of ${a} and ${b} is = ${a + b}`);
}
rl.question("Enter the first number ", (input1) => {
  rl.question("Enter the second number ", (input2) => {
    if (/^-?\d+(\.\d+)?$/.test(input1.trim()) && /^-?\d+(\.\d+)?$/.test(input2.trim())) {
      let a = parseFloat(input1.trim());
      let b = parseFloat(input2.trim());
      sum(a, b);
      rl.close();
    } else {
      console.log("Enter the valid number ");
    }
  });
});
