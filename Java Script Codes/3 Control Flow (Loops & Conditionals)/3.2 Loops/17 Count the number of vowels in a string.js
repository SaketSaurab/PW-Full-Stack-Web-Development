// Count the number of vowels in a string.

const readline = require("readline");
function count(a) {
  let str = a.toLowerCase();
  let count = 0;
  const vowel = "aeiou";
  for (let char of str) {
    for (let i = 0; i < vowel.length; i++) {
      if (char == vowel[i]) {
        count++;
        break;
      }
    }
  }
  console.log(`Total number of vowels in ${str} is ${count}`);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the string ", (input) => {
  let a = input.trim();
if(a===""){
    console.log("String is empty ");
}
else{
    count(a);
}
  rl.close();
});
