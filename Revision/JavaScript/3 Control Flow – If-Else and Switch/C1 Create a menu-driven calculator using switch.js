// Create a menu-driven calculator using switch

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function check(input1, input2, input3) {
  return (
    /^\d+$/.test(input1.trim()) &&
    /^-?\d+$/.test(input2.trim()) &&
    /^-?\d+$/.test(input3.trim())
  );
}

function cal(input1, input2, input3) {
  let operation = Number(input1);
  let a = Number(input2);
  let b = Number(input3);
  if ((operation == 4 || operation == 5) && b == 0) {
    console.log("Operation is not possible");
  }

  switch (operation) {
    case 1:
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case 2:
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case 3:
      console.log(`${a} * ${b} = ${a * b}`);
      break;
    case 4:
      console.log(`${a} / ${b} = ${a / b}`);
      break;
    case 5:
      console.log(`${a} % ${b} = ${a % b}`);
      break;
    case 6:
      console.log(`${a} ** ${b} = ${a ** b}`);
      break;

    default: {
      console.log("Enter valid operation number ");
    }
  }
}

rl.question(
  "Enter operation number 1 for +, 2 for - , 3 for * , 4 for / , 5 for % , 6 for ** : ",
  (input1) => {
    rl.question("Enter First input : ", (input2) => {
      rl.question("Enter second input : ", (input3) => {
        if (check(input1, input2, input3)) {
          cal(input1, input2, input3);
        } else {
          console.log("Enter valid input");
        }
        rl.close();
      });
    });
  }
);
