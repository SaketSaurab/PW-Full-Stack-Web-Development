// Find the sum of all elements in an array.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(input) {
  let num = input;
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num =Math.floor(num/10);
  }
  console.log(`The sum of ${input} is ${sum}`);
}

rl.question("Enter the number ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = parseInt(input.trim(),10);
    sum(num);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
