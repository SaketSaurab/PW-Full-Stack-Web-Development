// Implement your own `filter()` function.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function evenNumber(num){
 let  arr1=num.filter(a=>a%2===0);
  console.log(arr1);

}
function askInput(){
    
rl.question("Enter the number : ",(input)=>{
    let arr1=input.trim().split(" ");
    let arr2=arr1.every((val)=>val !=="" && !isNaN(val));
    if(!arr2){
        console.log("Enter number only ");
        return askInput();
    }
    else{
       let numArr=arr1.map(Number);
       evenNumber(numArr);
    }
})
}
askInput();