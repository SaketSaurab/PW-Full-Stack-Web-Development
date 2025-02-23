// Check if an array contains a specific element.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function arrCheck(arr, check) {
  let search = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == check) {
      search = true;
      break;
    }
  }
  search
    ? console.log(`${check} is present`)
    : console.log("Element is not present");
}

rl.question("Enter the array elements : ", (input1) => {
  rl.question("Enter the data to check : ", (input2) => {
    let arr = input1.trim().split(" ");
    let check = input2.trim();
    arrCheck(arr, check);
    rl.close();
  });
});
