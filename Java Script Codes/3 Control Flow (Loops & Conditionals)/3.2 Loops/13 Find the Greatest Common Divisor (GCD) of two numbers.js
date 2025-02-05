//Find the Greatest Common Divisor (GCD) of two numbers
const readline = require("readline");
function gcd(a, b) {
  let small;
  if (a < b) {
    small = a;
  } else {
    small = b;
  }
  let ans;
  for (let i = 1; i <= small; i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  console.log(`The GCD of ${a} and ${b} is ${ans}`);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number : ", (input1) => {
  rl.question("Enter second number : ", (input2) => {
    if (/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())) {
      let num1 = parseInt(input1.trim());
      let num2 = parseInt(input2.trim());
      gcd(num1, num2);
    } else {
      console.log("Please enter valid number ");
    }
    rl.close();
  });
});
