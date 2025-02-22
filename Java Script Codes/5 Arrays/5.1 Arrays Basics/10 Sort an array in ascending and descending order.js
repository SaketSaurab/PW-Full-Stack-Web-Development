// Sort an array in ascending and descending order.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function arrayPrint(arr) {
  console.log("Original Array : ", arr);
}

function ascendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Ascending order array : ", arr);
}
function descendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Descending order array : ", arr);
}

rl.question("Enter the array elements : ", (input) => {
  let arr = input.trim().split(" ").map(Number);
  if (arr.every((num) => !isNaN(num))) {
    arrayPrint(arr);
    ascendingOrder(arr);
    descendingOrder(arr);
  } else {
    console.log("Enter valid array elements");
  }
  rl.close();
});
