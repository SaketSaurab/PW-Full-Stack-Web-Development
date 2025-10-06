// Return the sum of only even numbers in an array.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askInput() {
  rl.question("Enter number : ", (input) => {
    const arr1 = input.trim().split(" ");
    const allNumber = arr1.every((val) => val !== "" && !isNaN(val));

    if (!allNumber) {
      console.log("Enter valid number ");
      return askInput();
    }
    const arr2 = arr1.map(Number);
    const evenNumber = arr2.filter((num) => num % 2 === 0);
    let sum = 0;

    for (let i = 0; i < evenNumber.length; i++) {
      sum += evenNumber[i];
    }

    console.log(`The sum all even numbers is : ${sum}`);
  });
}

askInput();
