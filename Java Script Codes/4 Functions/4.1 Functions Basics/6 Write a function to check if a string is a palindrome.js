// Write a function to check if a string is a palindrome.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function palindromeCheck(input){
    let originalString=input;
    let revString="";
    for(let i=input.length-1;i>=0;i--){
        revString+=input.charAt(i);
    }
    if(revString==originalString){
        console.log(`${revString} is palindrome`);
    }
}
rl.question("Enter the string : ",(input)=>{
    let inputString=input.trim();
    palindromeCheck(inputString);
    rl.close();
});