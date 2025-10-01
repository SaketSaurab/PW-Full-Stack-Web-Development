// Write a function that converts a temperature from Celsius to Fahrenheit and Fahrenheit to Celsius.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tempCtoF(c) {
  return (9 / 5) * c + 32;
}
function tempFtoC(f) {
  return (f - 32) * (5 / 9);
}
function askChoice() {
  rl.question(
    "Choose conversion 1-> Celsius to Fahrenheit ,  2-> Fahrenheit to Celsius",
    (choice) => {
      if (choice == "1" || choice == "2") {
        askTemprature(choice);
      } else {
        console.log(
          "Invalid choice, Please select 1-> Celsius to Fahrenheit ,  2-> Fahrenheit to Celsius"
        );
        askChoice();
      }
    }
  );
}

function askTemprature(choice) {
  rl.question("Enter temprature ", (input) => {
    const tempValue = parseFloat(input);

    if (isNaN(tempValue)) {
      console.log("Enter valid temprature value ");
      askTemprature(choice);
      return;
    }
    if (choice === "1") {
      const result = tempCtoF(tempValue);
      console.log(`\n ${tempValue}°C = ${result.toFixed(2)}°F`);
    } else {
      const result = tempFtoC(tempValue);
      console.log(`\n ${tempValue}°F = ${result.toFixed(2)}°C`);
    }
    rl.close();
  });
}
askChoice();
