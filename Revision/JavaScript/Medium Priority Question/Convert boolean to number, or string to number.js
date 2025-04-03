// Convert boolean to number or string to number

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function convertToNumber(input){
    let a=input.trim().toLowerCase();
    if(a==='true'){
        console.log('1');
    }
    else if(a==='false'){
        console.log('0');
    }
    else{
        console.log('Enter valid input');
    }
}

rl.question("Enter the boolean value: ",(input)=>{
    convertToNumber(input);
    rl.close();
});