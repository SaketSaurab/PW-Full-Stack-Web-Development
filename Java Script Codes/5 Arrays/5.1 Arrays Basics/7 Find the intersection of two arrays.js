// Find the intersection of two arrays.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function intersectionArr(arr1, arr2) {
  let interArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !interArr.includes(arr1[i])) {
        interArr.push(arr1[i]);
      }
    }
  }
  console.log(`Intersection array : ${interArr}`);
}

rl.question("Enter the elemets of first array : ", (input1) => {
  rl.question("Enter the elements of second array : ", (input2) => {
    let arr1 = input1.trim().split(" ").map(Number);
    let arr2 = input2.trim().split(" ").map(Number);
    if (arr1.every((num) => !isNaN(num)) && arr2.every((num) => !isNaN(num))) {
      intersectionArr(arr1, arr2);
    } else {
      console.log("Enter valid array elements");
    }
  });
});
