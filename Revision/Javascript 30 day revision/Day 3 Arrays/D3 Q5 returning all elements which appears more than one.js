// Write a function that returns all elements of an array that appear more than once

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function duplicateElements(arr) {
  console.log(`Original input : ${arr}`);
  const freq = {};
  const duplicate = [];
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicate.push(key);
    }
  }
  console.log(`Duplicate inputs are : ${duplicate}`);
}

function askInput() {
  rl.question("Enter array elements : ", (input1) => {
    let arr = input1.trim().split(" ");
    duplicateElements(arr);
    rl.close();
  });
}

askInput();
