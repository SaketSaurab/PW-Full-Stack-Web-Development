// Find the longest word in an array of strings
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findLongestWord(input) {
  let inputArr = input.split(" ");
  let big = "";
  let bigLen = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].length > bigLen) {
      bigLen = inputArr[i].length;
      big = inputArr[i];
    }
  }
  console.log("Longest word in string is ", big);
}

rl.question("Enter the string : ", (input) => {
  findLongestWord(input);
  rl.close();
});
