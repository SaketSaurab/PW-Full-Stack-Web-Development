const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function arrInput(arr) {
  for (let name of arr) {
    console.log(name);
  }
}

rl.question("Enter array elements :", (input1) => {
  let arr = input1.trim().split(/\s+/);
  arrInput(arr);
  rl.close();
});
