// Calculate the area of a rectangle using const

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function inputValidation(a,b){
    return /^[+]?\d+(\.\d+)?$/.test(a.trim()) && /^[+]?\d+(\.\d+)?$/.test(b.trim());
}

function area(a,b){
    const ans=parseFloat(a)*parseFloat(b);
    console.log(`The area of rectangle is ${ans}`);
}

rl.question("Enter the lenght : ",(input1)=>{
    rl.question("Enter the width : ",(input2)=>{
        if(inputValidation(input1,input2)){
            area(input1,input2);
        }
        else{
            console.log("Enter valid input");
        }
        rl.close();
    });
});