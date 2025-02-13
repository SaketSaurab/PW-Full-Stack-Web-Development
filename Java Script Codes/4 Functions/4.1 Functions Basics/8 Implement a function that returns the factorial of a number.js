// Implement a function that returns the factorial of a number.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function factorial(input) {
  let ans = 1;
  if (input == 1 || input == 0) {
    ans = 1;
  } else {
    for (let i = 1; i <= input; i++) {
      ans *= i;
    }
  }
  console.log(`The factorail of ${input} is ${ans}`);
}
rl.question("Enter the number to check factorial ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = input.trim();
    factorial(num);
  } else {
    console.log("Enter valid positive number ");
  }
  rl.close();
});
