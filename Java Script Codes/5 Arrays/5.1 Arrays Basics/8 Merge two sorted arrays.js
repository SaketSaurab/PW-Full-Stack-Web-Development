// Merge two sorted arrays.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function mergerArr(arr1, arr2) {
  let ansArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ansArr.push(arr1[i]);
      i++;
    } else {
      ansArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    ansArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ansArr.push(arr2[j]);
    j++;
  }
  console.log("Merge Array : ", ansArr);
}
rl.question("Enter the elements of first array : ", (input1) => {
  rl.question("Enter the elements of second array : ", (input2) => {
    let arr1 = input1.trim().split(" ").map(Number);
    let arr2 = input2.trim().split(" ").map(Number);
    if (arr1.every((num) => !isNaN(num)) && arr2.every((num) => !isNaN(num))) {
      mergerArr(arr1, arr2);
    } else {
      console.log("Insert valid array elements");
    }
    rl.close();
  });
});
