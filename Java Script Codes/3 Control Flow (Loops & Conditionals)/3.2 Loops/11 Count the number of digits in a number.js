// Count the number of digits in a number.

const readline = require("readline");
function countDigits(num) {
  let originalNumber = num;

  if (num === 0) {
    console.log(`Total number of digits in ${originalNumber} is 1`);
    return;
  }
  num = Math.abs(num);
  let totalDigit = 0;
  while (num > 0) {
    totalDigit += 1;
    num = Math.floor(num / 10);
  }
  console.log(`Total number of digits in ${originalNumber} is ${totalDigit}`);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number to cont the digits : ", (input) => {
  if (/^-?\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    countDigits(num);
  } else {
    console.log("Enter valid number ");
  }
  rl.close();
});
