const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function printNum(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
}

rl.question("Enter the first number : ", (input1) => {
  rl.question("Enter the last number : ", (input2) => {
    if (/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())) {
      let a = parseInt(input1.trim());
      let b = parseInt(input2.trim());
      printNum(a, b);
    }
    else{
        console.log("Enter valid number");
    }
    rl.close();
  });
});
