// . Remove duplicate elements from an array.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function uniqueArr(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log("Original Array ", arr);
  console.log("Unique Array ", uniqueArray);
}

rl.question("Enter the array elements : ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  if (arr.every((num) => !isNaN(num))) {
    uniqueArr(arr);
  } else {
    console.log("Enter valid array elements ");
  }
  rl.close();
});
