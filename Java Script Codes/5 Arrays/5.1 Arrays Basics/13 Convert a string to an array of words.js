// Convert a string to an array of words.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function strArray(str) {
  let arr = str.split(" ");

  console.log(`Original String : ${str}`);
  console.log(`Array : ${arr}`);
}
rl.question("Enter the string ", (input) => {
  let str = input.trim();
  strArray(str);
  rl.close();
});
