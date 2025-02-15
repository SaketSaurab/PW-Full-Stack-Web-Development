// Write a function that capitalizes the first letter of each word in a string.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function firstLetter(input){
    let words=input.trim().split(/\s+/);
    let result="";
    for(let i=0;i<words.length;i++){
        let word=words[i];
        result+=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        if(i<words.length-1){
            result+=" ";
        }
    }
    console.log(result);
}

rl.question("Enter the string : ",(input)=>{
    let str=input.trim();
    firstLetter(str);
    rl.close();
});