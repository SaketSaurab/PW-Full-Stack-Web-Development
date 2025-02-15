// Write a function that returns the first N Fibonacci numbers

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function printFibonacci(num) {
  let a = 0;
  let b = 1;
  let result = "";
  if (num == 0) {
    console.log("0");
  } else if (num == 1) {
    console.log("0 1");
  } else if (num > 1) {
    for (let i = 2; i <= num; i++) {
      let c = a + b;
      result = result + " " + c;
      a = b;
      b = c;
    }
    console.log("0 1", result);
  }
}
rl.question("Enter the number to print fibonacci series ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    printFibonacci(num);
  } else {
    console.log("Enter valid positive number ");
  }
  rl.close();
});
