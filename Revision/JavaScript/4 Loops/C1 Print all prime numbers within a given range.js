// Print all prime numbers within a given range
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printPrime(input1, input2) {
  let a = Number(input1);
  let b = Number(input2);

  for (let i = a; i <= b; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (i > 1 && isPrime) {
      console.log(`${i}`);
    }
  }
}

function check(input1, input2) {
  return /^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim());
}

rl.question("Enter first number : ", (input1) => {
  rl.question("Enter second number : ", (input2) => {
    if (check(input1, input2)) {
      printPrime(input1, input2);
    } else {
      console.log("Enter valid input");
    }
    rl.close();
  });
});
