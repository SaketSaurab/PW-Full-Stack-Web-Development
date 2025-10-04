// Given a sentence, return the longest word in it.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function longestWord(input) {
  const sentence = input.trim();
  const words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  console.log(`The longest word length is ${longestWord}`);
}

rl.question("Enter the sentence : ", (input1) => {
  longestWord(input1);
  rl.close();
});
