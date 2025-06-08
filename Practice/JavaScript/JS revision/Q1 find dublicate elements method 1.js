// Given an array of numbers, find which numbers appear more than once.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function RepeatedElement(arr) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !outputArr.includes(arr[i])) {
        outputArr.push(arr[i]);
      }
    }
  }
  console.log(`Repeated elements : ${outputArr}`);
}

rl.question("Enter the array element : ", (inpu1) => {
  let arr1 = inpu1.trim().split(" ").map(Number);
  RepeatedElement(arr1);
  rl.close();
});
