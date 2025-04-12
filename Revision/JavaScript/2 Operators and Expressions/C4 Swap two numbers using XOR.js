// Swap two numbers using XOR

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputCheck(input1, input2) {
  return /^-?\d+$/.test(input1) && /^-?\d+$/.test(input2);
}

function swapUsingXOR(input1, input2) {
  let a = parseInt(input1.trim());
  let b = parseInt(input2.trim());

  console.log(`Before swapping input 1 : ${a} , input 2: ${b}`);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(`After swapping input 1:${a} , input 2 : ${b}`);
}
rl.question("Enter first number : ", (input1) => {
  rl.question("Enter second number : ", (input2) => {
    if (inputCheck(input1, input2)) {
      swapUsingXOR(input1, input2);
    } else {
      console.log("Enter valid input");
    }
    rl.close();
  });
});
