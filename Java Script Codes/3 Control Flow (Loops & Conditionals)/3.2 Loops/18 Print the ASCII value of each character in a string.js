// Print the ASCII value of each character in a string

const readline = require("readline");
function asciiValue(inputString) {
    console.log(`The ASCII value of character in ${inputString} are : `);
    for(let char of inputString){
        console.log(`${char} = ${char.charCodeAt(0)}` );
    }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the string ", (input) => {
  if (input === "") {
    console.log("Please enter the non-empty string");
  } else {
    asciiValue(input);
  }
  rl.close();
});
