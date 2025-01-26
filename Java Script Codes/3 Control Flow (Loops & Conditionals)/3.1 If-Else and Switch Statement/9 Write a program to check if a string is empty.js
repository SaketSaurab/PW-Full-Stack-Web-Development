// Write a program to check if a string is empty
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function stringCheck(str){
    if(str.trim()==""){
        console.log("The string is empty");
    }
    else{
        console.log("The string is not empty");
    }
}

rl.question("Enter the string to check ",(inputText)=>{
    stringCheck(inputText);
    rl.close();
})