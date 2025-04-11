// Use a ternary operator to check if a number is even or odd
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputCheck(input) {
  input = input.trim();
  return /^-?\d+$/.test(input);
}

function numCheck(input) {
  input = Number(input);
  return input % 2 == 0
    ? console.log(`${input} is even number `)
    : console.log(`${input} is odd number`);
}

rl.question("Enter number to check : ", (input) => {
  if (inputCheck(input)) {
    numCheck(input);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
