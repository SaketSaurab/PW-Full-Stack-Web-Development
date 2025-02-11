// Print the reverse of a string.
const readline=require('readline');
const rl=readline.createInterface({
input:process.stdin,
output:process.stdout,
});
function reverseString(str){
    let newString="";
for(let i=str.length-1;i>=0;i--){
    newString+=str.charAt(i);
}
console.log(newString);
}
rl.question("Enter the string : ",(input)=>{
    reverseString(input);
    rl.close();
});
