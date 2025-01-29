// Find the quadrant of a given point (x, y).

const readline = require("readline");

function coordinate(x, y) {
  if (x > 0 && y > 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on Quadrant I`);
  } else if (x < 0 && y > 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on Quadrant II`);
  } else if (x < 0 && y < 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on Quadrant III`);
  } else if (x > 0 && y < 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on Quadrant IV`);
  } else if (x == 0 && y == 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies at origin point`);
  } else if (x == 0 && y !== 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on X axis`);
  } else if (x !== 0 && y == 0) {
    console.log(`X=${x} and Y=${y} co-ordinate lies on Y axis`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the X co-ordinate : ", (inputX) => {
  rl.question("Enter the Y co-ordinate : ", (inputY) => {
    const x = parseFloat(inputX);
    const y = parseFloat(inputY);
    if(isNaN(x) || isNaN(y)){
        console.log("Enter valid co-ordinate");
    }
    coordinate(x, y);
    rl.close();
  });
});
