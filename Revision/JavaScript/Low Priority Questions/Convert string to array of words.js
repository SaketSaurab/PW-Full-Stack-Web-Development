// Convert string to array of words

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


function arr(input){
   let words=input.trim().split(/\s+/);
console.log(words);
}

rl.question("Enter the string : ",(input)=>{
    arr(input);
    rl.close();
});