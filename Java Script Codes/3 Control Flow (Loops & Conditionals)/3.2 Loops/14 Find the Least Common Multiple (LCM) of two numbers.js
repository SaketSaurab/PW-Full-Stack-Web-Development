// Find the Least Common Multiple (LCM) of two numbers.
const readline = require("readline");
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function lcm(a, b) {
    let ans= Math.abs(a*b)/gcd(a,b);
    console.log(`The LCM of ${a} and ${b} is ${ans}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number : ", (input1) => {
  rl.question("Enter second number : ", (input2) => {
    if (/^-?\d+$/.test(input1.trim()) && /^-?\d+$/.test(input2.trim())) {
      let a = parseInt(input1.trim());
      let b = parseInt(input2.trim());
      lcm(a,b);

    }
    else{
        console.log("Enter valid number");
    }
  });
});
