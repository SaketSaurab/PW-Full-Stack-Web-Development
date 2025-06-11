// Count unique values

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countUniqueValue(arr) {
  const set = new Set();
  for (const num of arr) {
    set.add(num);
  }
  console.log("non repeated arr : ", [...set]);
  console.log(`number of unique elements ${set.size}`);
}
rl.question("Enter the array elements : ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  countUniqueValue(arr);
  rl.close();
});
