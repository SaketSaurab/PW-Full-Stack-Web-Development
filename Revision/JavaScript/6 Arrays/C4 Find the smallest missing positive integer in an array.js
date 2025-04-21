// Find the smallest missing positive integer in an array
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function missing(input) {
  let positive = input.filter((num) => num > 0);
  positive.sort((a, b) => a - b);

  let smallest = 1;
  for (let i = 0; i < positive.length; i++) {
    if (positive[i] === smallest) {
      smallest++;
    } else if (positive[i] > smallest) {
      break;
    }
  }

  console.log("Smallest missing integer : ", smallest);
}
rl.question("Enter array : ", (input) => {
    let arr=input.split(" ").map(Number);
  missing(arr);
  rl.close();
});
