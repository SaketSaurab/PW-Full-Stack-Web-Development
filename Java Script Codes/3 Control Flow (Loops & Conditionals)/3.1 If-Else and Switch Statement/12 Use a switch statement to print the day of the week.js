// Use a switch statement to print the day of the week.

const readline = require("readline");
function dayName(a) {
  switch (a) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid input Enter the number between 1 to 7");
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the day number between 1 to 7  :\n", (input) => {
  const day = parseInt(input.trim());
  if (isNaN(day) || day < 1 || day > 7) {
    console.log("Enter valid day number");
  } else {
    dayName(day);
    rl.close();
  }
});
