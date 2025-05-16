const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sum(a, b) {
  console.log(`Addition of two number ${a} + ${b} = ${a+b}`);
}

function sub(a, b) {
  console.log(`Subtraction of two number ${a} - ${b} = ${a-b}`);
}

function multi(a, b) {
  console.log(`Multiplication of two number ${a} x ${b} = ${a*b}`);
}

rl.question("Enter first number ", (input1) => {
  rl.question("Enter secon number ", (input2) => {
    if (/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())) {
      let a = parseInt(input1.trim());
      let b = parseInt(input2.trim());
      sum(a, b);
      sub(a,b);
      multi(a,b);
    } else {
      console.log("Enter valid input");
      rl.close();
    }
    rl.close();
  });
});
