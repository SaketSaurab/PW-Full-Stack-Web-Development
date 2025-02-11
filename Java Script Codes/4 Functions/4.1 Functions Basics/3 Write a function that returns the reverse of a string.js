// Write a function that returns the reverse of a string.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function reverseString(input){
    let str=input.trim();
    let revStr="";
    for(let i=str.length-1;i>=0;i--){
        revStr+=str.charAt(i);
    }
    console.log(`The reverse of ${input} string is ${revStr}`);

}
rl.question("Enter the string : ",(input)=>{
    let str=input.trim();
    reverseString(str);
    rl.close();
});