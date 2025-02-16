// Write a function that converts a given string to camel case.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,  
});
function camelCase(input){
    let str=input.toLowerCase();
let words=str.trim().split(/\s+/);
// console.log(`Words : ${words}`);
let result="";
for(let i=1;i<words.length;i++){
    let word=words[i];
    if(i==0){
        result+=word;
    }
    result+=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
}
console.log(result);

}
rl.question("Enter the string to convert to camelCase ",(input)=>{
    let str=input.trim();
    camelCase(str);
    rl.close();
});