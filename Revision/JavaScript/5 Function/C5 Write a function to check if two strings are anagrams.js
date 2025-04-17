// Write a function to check if two strings are anagrams

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function anagramCheck(input1, input2) {
  input1 = input1.replace(/\s+/g, "").toLowerCase();
  input2 = input2.replace(/\s+/g, "").toLowerCase();

  if (input1.length !== input2.length) {
    return false;
  }
  const count = {};
  for (let char of input1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of input2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
}

rl.question("Enter first string : ", (input1) => {
  rl.question("Enter second string : ", (input2) => {
  let result=  anagramCheck(input1, input2);
  console.log(result?"They are anagram": "They are not anagram");
  rl.close();
   
  });
});
