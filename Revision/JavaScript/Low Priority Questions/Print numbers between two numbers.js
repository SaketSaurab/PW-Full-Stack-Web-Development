// Print numbers between two numbers

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printNumber(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}

function isInteger(str){
    return /^[-+]?\d+$/.test(str.trim(),10);
}

rl.question("Enter the first number : ", (input1) => {
  rl.question("Enter the second : ", (input2) => {
    if (isInteger(input1) && isInteger(input2)) {
      let a = parseInt(input1.trim());
      let b = parseInt(input2.trim());
      if (b > a) {
        printNumber(a, b);
      } else {
        console.log("First number must be less than the second number");
      }
    } else {
      console.log("Enter valid number");
      rl.close();
    }
  });
});
