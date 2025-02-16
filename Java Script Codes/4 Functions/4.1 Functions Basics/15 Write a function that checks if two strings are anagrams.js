// Write a function that checks if two strings are anagrams.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function anagramsCheck(input1, input2) {
  let clearString1 = input1.replace(/\s+/g, "");
  let clearString2 = input2.replace(/\s+/g, "");
  if (clearString1.length !== clearString2.length) {
    return false;
  }
  return (
    clearString1.split("").sort().join("") ===
    clearString2.split("").sort().join("")
  );
}
rl.question("Enter the first string to check : ", (input1) => {
  rl.question("Enter the second string ", (input2) => {
    let string1 = input1.trim().toLowerCase();
    let string2 = input2.trim().toLowerCase();
    let result = anagramsCheck(string1, string2);
    console.log(result);
    rl.close();
  });
});
