// Print the reverse of a string
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(input) {
  let len = input.length;
  let rev = [];
  for (let i = len - 1; i >= 0; i--) {
    rev.push(input.charAt(i));
  }
  console.log("Reverse string : ", rev.join(""));
}

rl.question("Enter string ", (input) => {
  reverseString(input);
  rl.close();
});
