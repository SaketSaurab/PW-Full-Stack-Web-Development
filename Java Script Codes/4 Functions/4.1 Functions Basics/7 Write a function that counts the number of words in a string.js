// Write a function that counts the number of words in a string.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function wordCount(input) {
  let string = input.trim();
  let word = string.split(/\s+/);
  let size = word.length;
  console.log(`The number of words in string ${string} is ${size}`);
}

rl.question("Enter the string to count the words ", (input) => {
  wordCount(input);
  rl.close();
});
