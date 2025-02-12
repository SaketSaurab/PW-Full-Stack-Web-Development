// Create a function to convert Fahrenheit to Celsius.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fahrenheitToCelsius(f) {
  let c = (f - 32) / (9 / 5);
  c = c.toFixed(2);
  console.log(`${f}\u00b0F = ${c}\u00b0C`);
}
rl.question("Enter the temprature in Fahrenheit : ", (input) => {
  if (/^-?\d+(\.\d+)?$/.test(input.trim())) {
    let f = parseFloat(input.trim());
    fahrenheitToCelsius(f);
  } else {
    console.log("Enter valid temprature");
  }
  rl.close();
});
