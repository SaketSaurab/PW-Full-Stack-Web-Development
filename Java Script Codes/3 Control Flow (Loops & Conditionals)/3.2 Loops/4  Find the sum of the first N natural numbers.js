//  Find the sum of the first N natural numbers.

const readline = require("readline");
function sum(x) {
  let add = 0;
  for (let i = 0; i <= x; i++) {
    add += i;
  }
  console.log(`The sum of first ${x} is ${add}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the number : ", (input) => {

  if(/^\d+$/.test(input.trim())){
    const num=parseInt(input.trim());
    sum(num);
  } else {
    console.log("Enter valid number ");
  }
  rl.close();
});
