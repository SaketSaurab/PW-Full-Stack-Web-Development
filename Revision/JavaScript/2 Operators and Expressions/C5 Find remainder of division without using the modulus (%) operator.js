// Find remainder of division without using the modulus (%) operator
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function remCheck(input1, input2) {
  let a = parseInt(input1);
  let b = parseInt(input2);

  if (b == 0) {
    console.log("Divison is not possible by 0");
    return;
  }

  let remainder = a - Math.floor(a / b) * b;
  console.log(`Remainder : ${remainder}`);
}
function inputCheck(input1, input2) {
  return /^-?\d+$/.test(input1) && /^-?\d+$/.test(input2);
}

rl.question("Enter dividend : ", (input1) => {
  rl.question("Enter the divisor : ", (input2) => {
    if (inputCheck(input1, input2)) {
      remCheck(input1, input2);
    } else {
      console.log("Enter valid input");
    }
    rl.close();
  });
});
