const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function primeNumberPrint(num){
    if(num<2){
        console.log("Enter number greater than 1");
        return
    }
}





rl.question("Enter number : ",(input1)=>{
    if(/^\d+$/.test(input1.trim())){
let a=parseInt(input1.trim());

    }
else{
    console.log("Enter valid number");
    rl.close();

}
    } );