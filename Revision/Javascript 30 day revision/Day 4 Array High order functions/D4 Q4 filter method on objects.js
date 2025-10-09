// Given an array of objects `{name, age}`, return only names of people older than 18.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const people = [];
let total;
rl.question("Enter the total number of people : ", (input1) => {
  total = parseInt(input1.trim());

  takeInput();
});
let count = 0;
function takeInput() {
  if (count < total) {
    rl.question("Enter name : ", (name) => {
      rl.question("Enter age : ", (age) => {
        people.push({
          name: name,
          age: Number(age),
        });
        count++;
        takeInput();
      });
    });
  } else {
    const result = people
      .filter((person) => person.age > 18)
      .map((person) => person.name);

    console.log(result);
  }
}
