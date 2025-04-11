// Use logical AND and OR with short-circuit behavior

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shortCircuit(input){
    input=input.trim();
    let out=input|| "default input";
    console.log(`You enter ${out}`);

    input && console.log(`The lenght of input string is ${input.length}`);
}
rl.question("Enter something or leave blank : ",(input)=>{
    shortCircuit(input);
    rl.close();
});