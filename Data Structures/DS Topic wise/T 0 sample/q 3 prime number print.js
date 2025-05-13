const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function primeCheck(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeUptoN(num) {
  let totalPrimes = 0;
  for (let i = 2; i <= num; i++) {
    if (primeCheck(i)) {
      console.log(i);
      totalPrimes++;
    }
  }
  console.log("Total prime numbers are : " + totalPrimes);
}

rl.question("Enter number : ", (input1) => {
  if (/^\d+$/.test(input1.trim())) {
    let a = parseInt(input1.trim());
    primeUptoN(a);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
