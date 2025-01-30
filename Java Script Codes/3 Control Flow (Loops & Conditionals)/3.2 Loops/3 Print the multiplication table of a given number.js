// Print the multiplication table of a given number

const readline=require('readline');
function table(a){
    for(let i=1;i<=10;i++){
        console.log(`${a}X${i}=${a*i}`);
    }
}
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter the number to print multiplication table : ",(num)=>{
    const x=parseInt(num.trim());
    if(!Number.isNaN(x) && Number.isInteger(x)){
        table(x);
    }
    else{
        console.log("Enter valid number");
    }
    rl.close();
})