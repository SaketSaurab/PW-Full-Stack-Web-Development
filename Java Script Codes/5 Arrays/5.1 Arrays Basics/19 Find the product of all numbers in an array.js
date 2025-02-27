// Find the product of all numbers in an array.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function productOfArr(arr) {
  let ans = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  console.log(`The product of array elements ${arr} is ${ans}`);
}

rl.question("Enter the array elements : ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  productOfArr(arr);
  rl.close();
});
