//  Write a function to check if a number is prime
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function primeCheck(num) {
  let check = true;
  let a = num;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      check = false;
      break;
    }
  }
  if (check === true) {
    console.log(`${a} is prime number`);
  } else {
    console.log(`${a} is not prime number `);
  }
}

rl.question("Enter the number to check for prime : ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    if (num == 0) {
      console.log("Enter the number greater than  0 ");
    } else if (num == 1 || num == 2) {
      console.log(`The prime number of ${num} is ${num}`);
    } else {
      primeCheck(num);
    }
    rl.close();
  } else {
    console.log(`${input} is not valid number Please enter valid number `);
  }
});
