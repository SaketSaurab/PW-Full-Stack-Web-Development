// Convert `"hello world"` into `"Hello World"` (capitalize first letter of each word).
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function capitalize(str) {
  const inputString = str.toLowerCase().trim();
  let words = inputString.split(/\s+/);
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalizeWord);
  }
  console.log(result.join(" "));
}

rl.question(
  "Enter the text to capitalize the first letter of each word : ",
  (input1) => {
    capitalize(input1);
    rl.close();
  }
);
