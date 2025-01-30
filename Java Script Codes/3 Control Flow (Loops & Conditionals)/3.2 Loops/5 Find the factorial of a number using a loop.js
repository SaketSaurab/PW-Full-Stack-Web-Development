//Find the factorial of a number using a loop
const readline = require("readline");
function facto(n) {
  if (n === 0) {
    console.log(`The factorial of ${n} is 1`);
  } else {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${n} is ${fact}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number to check : ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    const x = parseInt(input.trim());
    facto(x);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
