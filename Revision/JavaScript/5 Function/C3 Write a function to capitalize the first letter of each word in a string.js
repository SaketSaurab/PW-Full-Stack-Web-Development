// Write a function to capitalize the first letter of each word in a string

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function firstLetter(input) {
  let first = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(`Input string : ${input}`);
  console.log(`Capitalize stirng : ${first}`);
}

rl.question("Enter the string : ", (input) => {
  firstLetter(input);
  rl.close();
});
