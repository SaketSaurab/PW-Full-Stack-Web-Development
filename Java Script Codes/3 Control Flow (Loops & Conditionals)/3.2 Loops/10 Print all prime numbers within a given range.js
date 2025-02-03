// Print all prime numbers within a given range.

const readline = require("readline");

function printPrimeNumber(a, b) {
  let totalPrime = 0;
  for (let i = a; i <= b; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      totalPrime++;
      console.log(i);
    }
   
  }
  console.log(
    `The total number of prime numbers between ${a} and ${b}  is ${totalPrime}`
  );
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number : ", (input1) => {
  rl.question("Enter the second number : ", (input2) => {
    if (/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())) {
      let num1 = parseInt(input1.trim());
      let num2 = parseInt(input2.trim());
      if (num1 > 1) {
        if (num2 > num1) {
          printPrimeNumber(num1, num2);
        } else {
          console.log("second number must be greater than first number");
        }
      } else {
        console.log("The first number must be greater than 1");
      }
    } else {
      console.log("Enter valid number");
    }
    rl.close();
  });
});
