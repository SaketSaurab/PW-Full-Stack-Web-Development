// Print all Armstrong numbers up to a limit
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function check(input) {
  return /^\d+$/.test(input.trim());
}

function printArmstrongNum(input) {
 let a=parseInt(input);

 for(let i=1;i<=a;i++){
    let num=i.toString();
    let power=num.length;
let sum=0;
    for(let j=0;j<power;j++){
        let digit=parseInt(num[j]);
        sum+=Math.pow(digit,power);
    }
    if(sum==i){
        console.log(i);
    }
 }
}

rl.question(
  "Enter the number upto which you want to check for armstrong number : ",
  (input) => {
    if (check(input)) {
      printArmstrongNum(input);
    } else {
      console.log("Enter valid number");
    }
    rl.close();
  }
);
