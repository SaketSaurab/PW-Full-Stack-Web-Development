// Create a function that takes a number of minutes and returns hours and minutes
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputMin(minute) {
  const hour = Math.floor(minute / 60);
  const min = minute % 60;

  console.log(`${minute} is equal to ${hour} hour and ${min} minutes`);
}

function askMinute() {
  rl.question("Enter the time in minute : ", (input1) => {
    const minutes = parseInt(input1.trim());
    if (isNaN(minutes) || minutes < 0) {
      console.log("Enter valid time ");
      return askMinute();
    }
    inputMin(minutes);
    rl.close();
  });
}
askMinute();
