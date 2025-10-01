// Write a function that takes two numbers and returns their sum, difference, product, and division in an object.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(a, b) {
  console.log(`${a} + ${b}= ${a + b}`);
}

function difference(a, b) {
  console.log(`${Math.max(a, b)} - ${Math.min(a, b)} = ${Math.abs(a - b)}`);
}
function multi(a, b) {
  console.log(`${a} x ${b} = ${a * b}`);
}

function division(a, b) {
  if (a === 0 || b === 0) {
    console.log("Division is not possible by 0");
    return;
  }

  if (a > b) {
    console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
  } else {
    console.log(`${b} / ${a} = ${(b / a).toFixed(2)}`);
  }
}
rl.question("Enter first number ", (input1) => {
  rl.question("Enter second number ", (input2) => {
    let a = parseInt(input1);
    let b = parseInt(input2);

    if (isNaN(a) || isNaN(b)) {
      console.log("Enter valid input");
      rl.close();
      return;
    }
    sum(a, b);
    difference(a, b);
    multi(a, b);
    division(a, b);
    rl.close();
  });
});
