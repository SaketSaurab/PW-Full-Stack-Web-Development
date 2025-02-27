// Create an array of unique random numbers.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function randomArr(n, p) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10 ** p);
  }
  console.log(arr);
}
rl.question("Enter the size of the array : ", (input1) => {
  rl.question("Enter digit size ", (input2) => {
    if (/^\d+$/.test(input2.trim()) && /^\d+$/.test(input1.trim())) {
      let size = parseInt(input1.trim());
      randomArr(size, input2);
    } else {
      console.log("Enter valid positive number");
    }
    rl.close();
  });
});
