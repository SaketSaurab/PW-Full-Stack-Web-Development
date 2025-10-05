// Find the second largest number in an array.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  rl.question("Enter the array numbers : ", (input1) => {
    const arr1 = input1.trim().split(" ");
    const allNumber = arr1.every((val) => val !== "" && !isNaN(val));
    if (!allNumber) {
      console.log("Please enter number only ");
      return askInput();
    }
    let arr2 = arr1.map(Number);
    let big = arr2[0];
    let secondBig = arr2[0];
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i] > big) {
        secondBig = big;
        big = arr2[i];
      } else if (arr2[i] > secondBig && arr2[i] < big) {
        secondBig = arr2[i];
      }
    }
    console.log(`The second  biggest number is : ${secondBig}`);
  });
}

askInput();
