// Merge two sorted arrays
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function outputArr(input1, input2) {
  let i = 0;
   let j = 0;
  let mergeArr = [];
  while (i < input1.length && j < input2.length) {
    if (input1[i] < input2[j]) {
      mergeArr.push(input1[i]);
      i++;
    } else {
      mergeArr.push(input2[j]);
      j++;
    }
  }
  while (i < input1.lenght) {
    mergeArr.push[input1[i]];
    i++;
  }
  while (j < input2.lenght) {
    mergeArr.push(input2[j]);
    j++;
  }
  console.log(`Output : ${mergeArr}`);
}

rl.question("Enter first sorted array : ", (input1) => {
  rl.question("Enter the second sorted array : ", (input2) => {
    let firstArr = input1.split(" ").map(Number);
    let secondArr = input2.split(" ").map(Number);

    outputArr(firstArr,secondArr);
    rl.close();
  });
});
