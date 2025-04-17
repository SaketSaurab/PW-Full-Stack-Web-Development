//  Write a function to check if a number is prime

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function check(input) {
  return /^\d+$/.test(input.trim());
}

function primeCheck(input) {
  let num = Number(input.trim());
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is prime number`);
  } else {
    console.log(`${num} is not prime number`);
  }
}

rl.question("Enter number to check prime : ", (input) => {
  if (check(input)) {
    primeCheck(input);
  } else {
    console.log("Enter valid number ");
  }
  rl.close();
});
