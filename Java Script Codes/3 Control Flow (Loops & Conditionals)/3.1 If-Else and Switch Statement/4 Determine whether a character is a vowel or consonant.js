// Determine whether a character is a vowel or consonant.

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the alphabet to check : ",(alpha)=>{
    if(alpha.length!==1 ||!/[a-zA-Z]/.test(alpha)){
        console.log("Invalid input. Please input a valid single alphabet.");
    }
    else{
        const a=alpha.toLowerCase();
        if(a==="a"|| a==="e"||a==="i"||a==="o"||a==="u"){
            console.log(`${alpha} is vowel`);
        }
        else{
            console.log(`${alpha} is consonant`);
        }
    }
    rl.close();
});
