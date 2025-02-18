// Find the sum of all elements in an array.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumArray(arr){
  let sum=0;
  for(let num of arr){
    sum+=num;
  }
  console.log(`The sum of array is ${sum}`);
}

rl.question("Enter the array elements seprated by space ",(input)=>{
  let arr=input.trim().split(" ").map(Number);
  if(arr.every((num)=>!isNaN(num))){
    sumArray(arr);
  }
  else{
    console.log("Enter valid array elements");
  }
  rl.close();
})
