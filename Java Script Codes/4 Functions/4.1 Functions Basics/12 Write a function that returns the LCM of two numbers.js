// Write a function that returns the LCM of two numbers

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,  
});
function HCF(input1,input2){
    let x=input1;
    let y=input2;
    while(y!==0){
        let temp=y;
        y=x%y;
        x=temp;
    }
    return x;
}
function LCM(input1,input2){
    let a=input1;
    let b=input2;
    let hcf= HCF(a,b);

    let ans=Math.floor(a*b)/(hcf);
    console.log(`The LCM of ${a} and ${b} is ${ans}`);
}
rl.question("Enter the first number: ",(input1)=>{
    rl.question("Enter the second number: ",(input2)=>{
        if(/^\d+$/.test(input1.trim()) && /^\d+$/.test(input2.trim())){
            let a=parseInt(input1);
            let b=parseInt(input2);
            LCM(a,b);
        }
        else{
            console.log("Enter valid positive number ");
        }
        rl.close();
    });
});