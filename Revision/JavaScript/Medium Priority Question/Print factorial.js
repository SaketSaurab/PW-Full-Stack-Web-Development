// Print factorial

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fact(input) {
  let a = parseInt(input);
  let ans = 1;
  for (let i = a; i > 0; i--) {
    ans *= i;
  }
  console.log(`The factorial of ${a} is ${ans}`);
}

function isInteger(str) {
  return /^[+]?\d+$/.test(str.trim(), 10);
}

rl.question("Enter the number to print factorial: ", (input) => {
  if (isInteger(input)) {
    fact(input);
  } else {
    console.log("Enter positive number: ");
  }
  rl.close();
});
