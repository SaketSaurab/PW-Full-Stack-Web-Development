// array sum

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(input) {
  let ans = 0;
  let arr = input.trim().split(/\s+/).map(Number);
  if (arr.some(isNaN)) {
    console.log("Enter valid array elements");
    return;
  }
  console.log(`Input array: ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  console.log("The sum of array elements is ", ans);
}

rl.question("Enter array : ", (input) => {
  sum(input);
  rl.close();
});
