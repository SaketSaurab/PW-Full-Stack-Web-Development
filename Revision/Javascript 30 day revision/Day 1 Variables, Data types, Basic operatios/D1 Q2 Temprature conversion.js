// Write a function that converts a temperature from Celsius to Fahrenheit and Fahrenheit to Celsius.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function temp(a) {
  let result = (9 / 5) * a + 32;
  console.log(`${a}°C = ${result}°f`);
}

rl.question("Enter temprature : ", (input1) => {
  let a = parseInt(input1);
  if (isNaN(a)) {
    console.log("Enter valid number ");
    rl.close();
    return;
  }
  temp(a);
  rl.close();
});
