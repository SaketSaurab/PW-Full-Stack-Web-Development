//Check if a variable is undefined or null
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function check(input) {
  if (input == null || input.trim() === "") {
    console.log(`Input received is null , undefined  or empty`);
  } else {
    console.log(`input received is : ${input}`);
  }
}

rl.question("Enter the input : ", (input) => {
  check(input);
  rl.close();
});
