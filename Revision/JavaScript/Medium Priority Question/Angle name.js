// Use if-else for angle type (acute, right, obtuse)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validInput(input) {
  return /^[+]?\d+(\.\d+)?$/.test(input.trim());
}

function angleCheck(input) {
  let angle = parseFloat(input.trim());

  if (angle > 0 && angle < 90) {
    console.log(`${angle} is Acute angle`);
  } else if (angle == 90) {
    console.log(`${angle} is Right angle`);
  } else if (angle > 90 && angle < 180) {
    console.log(`${angle} is Obtuse Angle`);
  } else if (angle == 180) {
    console.log(`${angle} is Straight Angle`);
  } else {
    console.log("Enter valid angle");
  }
}

rl.question("Enter the angle ", (input) => {
  if (validInput(input)) {
    angleCheck(input);
  } else {
    console.log("Enter valid angle");
  }
  rl.close();
});
