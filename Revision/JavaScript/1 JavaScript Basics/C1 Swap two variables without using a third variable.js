// Swap two variables without using a third variable
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validation(input1, input2) {
  return /^-?\d+(\.\d+)?$/.test(input1) && /^-?\d+(\.\d+)?$/.test(input2);
}

function swapFunction(input1, input2) {
  let a = parseFloat(input1.trim());
  let b = parseFloat(input2.trim());
  console.log(`Before swap : A = ${a}  B =${b}`);
  a = a + b;
  b = parseFloat(a - b);
  a = parseFloat(a - b);
  console.log(`After Swap  A: ${a} B: ${b}`);
}

rl.question("Enter first number: ", (input1) => {
  rl.question("Enter the second number : ", (input2) => {
    if (validation(input1, input2)) {
      swapFunction(input1, input2);
    } else {
      console.log("Enter valid number ");
    }
    rl.close();
  });
});
