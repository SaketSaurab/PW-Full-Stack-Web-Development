// Printing dublicates using Set and has
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function repeatedElements(arr) {
  const seen = new Set();
  const duplicate = new Set();
  for (const num of arr) {
    if (seen.has(num)) {
      duplicate.add(num);
    } else {
      seen.add(num);
    }
  }
  console.log(`Repeated element : `, [...duplicate]);
}

rl.question("Enter the array elements : ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  repeatedElements(arr);
  rl.close();
});
