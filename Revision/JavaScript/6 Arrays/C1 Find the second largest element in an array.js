// Find the second largest element in an array

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function secondLargestElement(input) {
  let arr = input.split(" ").map(Number);
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  if (second === -Infinity) {
    console.log("Second largest does not exist");
  } else {
    console.log("Second largest element is", second);
    console.log(`Biggest number: ${first}`);
  }
}

rl.question("Enter the array elements : ", (input) => {
  secondLargestElement(input);
  rl.close();
});
