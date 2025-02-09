// Implement a number guessing game.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function guessNumber(randomNumber){
rl.question("Guess the number : ",(input)=>{
  if(!/^\d+$/.test(input.trim())){
    console.log("Enter valid positive number");
    guessNumber(randomNumber);
  }
  else{
    let userInput=parseInt(input.trim());
    if(userInput===randomNumber){
      console.log(`you guess it right random number was : ${randomNumber}`);
    }
    else if(userInput<randomNumber){
      console.log("enter bigger number");
      guessNumber(randomNumber);
    }
    else if(userInput>randomNumber){
      console.log("enter smaller number");
      guessNumber(randomNumber);
    }
  }
})
}

const randomNumber=Math.floor(Math.random()*100);
console.log("Guess the number between 0 to 100");
guessNumber(randomNumber);