// Write a function that generates a random number.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomNumber(input) {
  let num = 1;
  for (let i = 0; i < input; i++) {
    num *= 10;
  }
  let randomNum = parseInt(Math.random() * num);
  console.log(randomNum);
}
rl.question("Enter the number of digits for the random number. : ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let num = parseInt(input.trim());
    randomNumber(num);
  } else {
    console.log("Enter valid positive number");
  }
  rl.close();
});
