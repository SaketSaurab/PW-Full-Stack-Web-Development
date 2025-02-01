//Reverse a given number.
const readline = require("readline");

function reverseNumber(num) {
  let a = num;
  let ans = 0;
  while (num > 0) {
    ans = ans * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(`The reverse of ${a} is ${ans}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number to reverse : ", (input) => {
  if (/^-?\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    reverseNumber(num);
  } else {
    console.log("Enter valid number");
  }

  rl.close();
});
