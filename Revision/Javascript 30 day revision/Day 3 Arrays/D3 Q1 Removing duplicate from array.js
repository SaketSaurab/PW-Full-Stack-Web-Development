// Remove duplicates from an array without using Set.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function removeDuplicate(input) {
  let arr = input.split(/\s+/);
  //   console.log(arr);
  let result = [];
  let check = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!check[item]) {
      check[item] = true;
      result.push(item);
    }
  }
  console.log(`Unique elements : ${result}`);
}

rl.question("The the array elements : ", (input1) => {
  removeDuplicate(input1.trim());
  rl.close();
});
