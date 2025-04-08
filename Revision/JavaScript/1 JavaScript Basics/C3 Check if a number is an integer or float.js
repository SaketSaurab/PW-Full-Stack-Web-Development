// Check if a number is an integer or float
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function check(input) {
  input = input.trim();
  const intRegex = /^-?\d+$/;
  const floatRegex = /^-?\d+\.\d+$/;

  if (intRegex.test(input)) {
    console.log(`${input} is integer`);
  } else if (floatRegex.test(input)) {
    console.log(`${input} is float`);
  } else {
    console.log(`${input} is not number`);
  }
}

rl.question("Enter the number to check ", (input) => {
  check(input);
  rl.close();
});
