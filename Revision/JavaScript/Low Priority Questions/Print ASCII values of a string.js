// Print ASCII values of a string
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function stringToASCII(input){
    for(let i=0;i<input.length;i++){
        console.log(`${input[i]} : ${input.charCodeAt(i)}`);
    }
}


rl.question("Enter the string : ",(input)=>{
stringToASCII(input);
    rl.close();
});