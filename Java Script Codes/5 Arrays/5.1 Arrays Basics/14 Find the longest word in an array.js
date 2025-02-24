// Find the longest word in an array.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function longWord(arr) {
  let bigSize = arr[0].length;
  let bigWord = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > bigSize) {
      bigSize = arr[i].length;
      bigWord = arr[i];
    }
  }
  console.log(`The biggest word in the array is ${bigWord}`);
}
rl.question("Enter the word array elements ", (input) => {
  let arr = input.trim().split(" ");
  longWord(arr);
  rl.close();
});
