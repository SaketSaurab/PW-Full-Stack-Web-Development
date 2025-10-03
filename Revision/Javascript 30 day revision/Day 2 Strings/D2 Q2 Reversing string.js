// Reverse a string without using `.reverse()`.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function reverseString(input) {
  const inputString = input.trim();
  let outputString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    outputString += inputString.charAt(i);
  }

  console.log(
    `Original input string : ${inputString} and reversed string : ${outputString}`
  );
}

function ask() {
  rl.question("Enter the string to reverse : ", (input) => {
    reverseString(input);
    rl.close();
  });
}

ask();
