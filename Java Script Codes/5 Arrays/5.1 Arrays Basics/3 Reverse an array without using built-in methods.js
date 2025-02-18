// Reverse an array without using built-in methods.

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function reverseArr(input){
    console.log(`Original Array : ${input}`);
    console.log("Revere array ");
    for(let i=input.length-1;i>=0;i--){
        console.log(input[i]);
    }
}
rl.question("Enter the array elements by seprating then with space : ",(input)=>{
    let arr=input.trim().split(" ").map(Number);
    if(arr.every((num)=>!isNaN(num))){
        reverseArr(arr);
    }
    else{
        console.log("Enter valid array elements ");
    }
    rl.close();
});