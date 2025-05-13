const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function sum(a, b) {
  return console.log(`${a} +${b} = ${a + b}`);
}

rl.question("Enter first number ", (input1) => {
  rl.question("Enter the second number ", (input2) => {
    if (/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())) {
      let a = parseInt(input1.trim());
      let b = parseInt(input2.trim());
      sum(a, b);
    }
    rl.close();
  });
});
