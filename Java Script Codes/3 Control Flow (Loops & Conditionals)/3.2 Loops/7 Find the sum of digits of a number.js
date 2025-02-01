//Find the sum of digits of a number.

const readline=require('readline');

function digitSum(num){
    let a=num;
    num=Math.abs(num);
    let total=0;
    while(num>0){
        total+=num%10;
      num=Math.floor(num/10);
    }
    console.log(`The total sum of ${a} digits is : ${total}`);
}
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter the number : ",(input)=>{
    if(/^-?\d+$/.test(input.trim())){
        let num=parseInt(input.trim());
        digitSum(num);
    }
    else{
        console.log("Enter valid number");
    }
    rl.close();
});