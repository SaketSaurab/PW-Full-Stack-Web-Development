// Print the Fibonacci series up to N terms

const readline = require("readline");

function fibo(x) {
  if (x <= 0) {
    console.log("Please enter positive number");
    return;
  }
  console.log(`Fibonacci series up to ${x} : `);
  let a = 0;
  let b = 1;
  if (x === 1) {
    console.log(a);
    return;
  }
  console.log(a);
  console.log(b);
  for (let i = 3; i <= x; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number to print fibonacci series : ", (input) => {
  if (/^-\d+$/.test(input.trim())) {
    const x = parseInt(input.trim());
    fibo(x);
  } else {
    console.log("Enter valid number");
  }
  rl.close();
});
