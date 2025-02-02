// Check if a number is a palindrome.

const readline = require("readline");

function palindromeCheck(num) {
  let que = num;
  let ans = 0;
  while (num > 0) {
    ans = ans * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (que === ans) {
    console.log(`${que} is palindrome`);
  } else {
    console.log(`${que} is not palindrome`);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number to check ", (input) => {
  if (/^-?\d/.test(input.trim())) {
    let num = parseInt(input.trim());
    palindromeCheck(num);
  } else {
    console.log("Enter valid number ");
  }
  rl.close();
});
