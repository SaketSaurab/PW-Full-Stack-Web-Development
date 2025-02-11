// Write a function that finds the maximum of three numbers.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function maxOfThree(a, b, c) {
  let max = a >= b && a >= c ? a : b >= a && b >= c ? b : c;
  console.log(`The maximum of ${a} , ${b} and ${c} is ${max}`);
}
rl.question("Enter first number : ", (input1) => {
  rl.question("Enter second number : ", (input2) => {
    rl.question("Enter third number : ", (input3) => {
      if (
        /^\d+(\.\d+)?$/.test(input1.trim()) &&
        /^\d+(\.d\+)?$/.test(input2.trim()) &&
        /^\d+(\.\d+)?$/.test(input3.trim())
      ) {
        let a = parseFloat(input1.trim());
        let b = parseFloat(input2.trim());
        let c = parseFloat(input3.trim());
        maxOfThree(a, b, c);
      } else {
        console.log("Enter valid number");
      }
      rl.close();
    });
  });
});
