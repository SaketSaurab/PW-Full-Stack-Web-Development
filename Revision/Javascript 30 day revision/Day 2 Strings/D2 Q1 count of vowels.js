// Write a function to count the number of vowels in a given string
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(str) {
  let text = str.toLowerCase().trim();
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text.charAt(i) == "a" ||
      text.charAt(i) == "e" ||
      text.charAt(i) == "i" ||
      text.charAt(i) == "o" ||
      text.charAt(i) == "u"
    ) {
      count++;
    }
  }

  console.log(`The total number of vowels in ${str} is ${count}`);
}

rl.question("Enter the string to count the number of vowel : ", (input1) => {
  count(input1);
  rl.close();
});
