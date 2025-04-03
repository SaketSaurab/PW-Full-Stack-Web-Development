// Convert string to number

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    
});

function strToNum(input){
    let num=parseFloat(input);
    console.log(num);
}

function stringCheck(input){
    return  /^[-+]?\d+(\.\d+)?$/.test(input.trim());
}

rl.question("Enter the string : ",(input)=>{
    if(stringCheck(input)){
        strToNum(input);
    }
    else{
        console.log("Enter valid string");
    }
    rl.close();

});