// Create a program that uses template literals to format a string dynamically.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function intro(name, age, city) {
  console.log(`My name is ${name}. I am ${age} years old. I live in ${city}. `);
}
rl.question("Enter name ", (input1) => {
  rl.question("Enter your age", (input2) => {
    rl.question("Enter your city ",(input3)=>{
        
    });
  });
});
