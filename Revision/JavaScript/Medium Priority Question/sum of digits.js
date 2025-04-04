const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(input) {
  let a = parseInt(input, 10);
  let sum = 0;
  while (a > 0) {
    sum += a % 10;
    a = Math.floor(a / 10);
  }
  console.log(`The sum of digits of ${input} is ${sum}`);
}
function inputValidation(input) {
  return /^[+]?\d+$/.test(input.trim());
}

rl.question("Enter number : ", (input) => {
  if (inputValidation(input)) {
    sum(input);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
