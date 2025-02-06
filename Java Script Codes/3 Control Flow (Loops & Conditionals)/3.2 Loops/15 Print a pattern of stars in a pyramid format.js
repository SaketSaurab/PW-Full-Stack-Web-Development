// Print a pattern of stars in a pyramid format.
const readline = require("readline");

function pyramid(a) {
  for (let i = 1; i <= a; i++) {
    let row = "";
    for (let j = 1; j <= a - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    for (let j = 2; j <=  i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the height of the pyramind : ", (input) => {
  if (/^\d+$/.test(input.trim())) {
    let a = parseInt(input.trim());
    pyramid(a);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
