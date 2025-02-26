// Find the sum of all even numbers in an array.

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function sumOfEven(arr){
let evenArr=arr.filter(num=>num%2==0);
let ans=evenArr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(ans);
}

rl.question("Enter the array elements : ",(input1)=>{
    let arr=input1.trim().split(" ").map(Number);
    sumOfEven(arr);
    rl.close();
});