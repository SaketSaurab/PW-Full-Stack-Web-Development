// Check if a string contains only numbers
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function check(input) {
  input = input.trim();
  let num = /^-?\d+(\.\d+)?$/;
  if (num.test(input)) {
    console.log(`${input} contains only numbers`);
  } else {
    console.log(`${input} contains string also`);
  }
}

rl.question("Enter the input", (input) => {
  check(input);
  rl.close();
});
