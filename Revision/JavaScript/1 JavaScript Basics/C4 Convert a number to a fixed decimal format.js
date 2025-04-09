// Convert a number to a fixed decimal format
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function decimalFormat(input) {
  input = input.trim();
  let numCheck = /^-?\d+\.\d+$/;
  if (numCheck.test(input)) {
    let number = parseFloat(input);
    let fixed = parseFloat(number.toFixed(2));
    console.log(fixed);
  } else {
    console.log("Invalid input");
  }
}

rl.question("Enter number ", (input) => {
  decimalFormat(input);
  rl.close();
});
