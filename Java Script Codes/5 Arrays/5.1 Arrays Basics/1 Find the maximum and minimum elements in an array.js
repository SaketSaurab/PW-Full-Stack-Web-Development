// Find the maximum and minimum elements in an array

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function max(input) {
  let arr = input.split(" ");
  let big = arr[0];

  console.log(`Input Array: ${arr}`);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
      big = arr[i];
    }
  }
  console.log("The largest number is ", big);
}
rl.question("Enter array elements seprated by space ", (input) => {
  max(input);
  rl.close();
});
