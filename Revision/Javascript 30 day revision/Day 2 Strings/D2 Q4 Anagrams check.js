// Check whether two strings are anagrams of each other.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAnagram(a, b) {
  if (a.length !== b.length) {
    console.log(
      `The given words ${a} and ${b} are not anagrams, lenght mismatch`
    );
    return;
  }

  const freq = {};
  for (let i = 0; i < a.length; i++) {
    const char = a[i].toLowerCase();
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    const char = b[i].toLowerCase();
    if (!freq[char]) {
      console.log(`The given words ${a} and ${b} are not anagrams`);
      return;
    }
    freq[char]--;
  }
  console.log(`The given words ${a} and ${b} are anagrams`);
}

function anagramsInput() {
  rl.question("Enter the first word : ", (input1) => {
    rl.question("Enter the second word : ", (input2) => {
      const a = input1.trim();
      const b = input2.trim();
      isAnagram(a, b);
      rl.close();
    });
  });
}

anagramsInput();
