// Find the frequency of each element in an array.

const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function frequencyCount(arr){
    let frequency={};
    arr.forEach(element=>{
        frequency[element]=(frequency[element]|| 0)+1;
    });
    console.log(frequency);
}
rl.question("Enter the array Elements : ",(input)=>{
    let arr=input.trim().split(" ").map(Number);
    if(arr.every((num)=>!isNaN(num))){
        frequencyCount(arr);
    }
    else{
        console.log("Enter valid array elements ");
    }
    rl.close();
})