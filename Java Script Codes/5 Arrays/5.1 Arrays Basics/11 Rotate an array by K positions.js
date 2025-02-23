// Rotate an array by K positions.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rotation(arr, k) {
  let n = arr.length;
  k = k % n;
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let newIndex = (k + i) % n;
    newArr[newIndex] = arr[i];
  }
  console.log("Original array : ", arr);
  console.log(`Rotated array : ${newArr}`);
}

rl.question("Enter array : ", (input1) => {
  rl.question("Enter the number of rotation ", (input2) => {
    let arr = input1.trim().split(" ").map(Number);
    let k = parseInt(input2.trim(),10);
    if (arr.every(num=> !isNaN(num)) && /^\d+$/.test(k)){
      rotation(arr, k);
    } else {
      console.log("Enter valid inputs");
    }
    rl.close();
  });
});
