// Count the number of vowels in a string.

const readline=require('readline');
function count(a){

}
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,      
    });
    rl.question("Enter the string ",(input)=>{
        let a=input.trim();
        count(a);
        rl.close();
    })