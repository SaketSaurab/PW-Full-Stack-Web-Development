// Given the length and width of a rectangle, return its area and perimeter.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function calculate(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  console.log(`The area is ${area} and perimeter is ${perimeter}`);
}

function askLength() {
  rl.question("Enter length of the rectangle: ", (input1) => {
    const length = parseFloat(input1.trim());
    if (isNaN(length) || length <= 0) {
      console.log("Enter valid length ");
      return askLength();
    }
    askWidth(length);
  });
}
function askWidth(length) {
  rl.question("Enter width of the rectangle : ", (input2) => {
    const width = parseFloat(input2.trim());
    if (isNaN(width) || width <= 0) {
      console.log("Enter valid width ");
      return askWidth(length);
    }
    calculate(length, width);
    rl.close();
  });
}

askLength();
