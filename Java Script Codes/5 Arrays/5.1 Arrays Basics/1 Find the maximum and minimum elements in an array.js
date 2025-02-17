// Find the maximum and minimum elements in an array

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function maxMin(input) {
  let arr = input.trim().split(/\s+/).map(Number);
  if (arr.some(isNaN)) {
    console.log("Enter valid number ");
    return;
  }
  let big = arr[0];
  let small = arr[0];

  console.log(`Input Array: ${arr}`);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  console.log("The largest number is ", big);
  console.log("The smallest number is ", small);
}
rl.question("Enter array elements seprated by space ", (input) => {
  maxMin(input);
  rl.close();
});
