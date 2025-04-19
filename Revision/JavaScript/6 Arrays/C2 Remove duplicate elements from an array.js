// Remove duplicate elements from an array
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function uniqueArr(input) {
  let arr = input.split(" ").map(Number);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

rl.question("Enter array elements ", (input) => {
  uniqueArr(input);
  rl.close();
});
