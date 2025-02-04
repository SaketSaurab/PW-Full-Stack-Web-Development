// Print all Armstrong numbers up to a given limit.

const readline = require("readline");
function PrintArmstrongNumber(a) {
  for (let x = 1; x <= a; x++) {
    let num = x;
    let originalNumber = x;
    let sizeOfNumber = 0;
    let arm = 0;

    while (num > 0) {
      sizeOfNumber += 1;
      num = Math.floor(num / 10);
    }
    num = originalNumber;
    while (num > 0) {
      let temp = num % 10;
      arm = arm + temp ** sizeOfNumber;
      num = Math.floor(num / 10);
    }
    if (originalNumber === arm) {
      console.log(originalNumber);
    }
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number to print Armstrong number ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    PrintArmstrongNumber(num);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
