// Check if a string contains a specific word.
const readline=require('readline');

function text(input1,input2){
    if(input1.includes(input2)){
        console.log(`${input1} contains ${input2}`);
    }
    else{
        console.log(`${input1} does not contain ${input2}`);
    }
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter the text \n",(input1)=>{
    rl.question("Enter the text to find \n",(input2)=>{
    text(input1,input2);
    rl.close();
    });
});