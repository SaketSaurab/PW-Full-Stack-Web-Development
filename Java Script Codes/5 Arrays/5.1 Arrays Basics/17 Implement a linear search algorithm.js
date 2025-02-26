// Implement a linear search algorithm.
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function linearSearch(arr,element){
    let index=-1;
for(let i=0;i<arr.length;i++){
if(arr[i]===element){
    index=i;
    break;
}
}
console.log(index>-1?`The element ${element} is present at index ${index}`: `The element ${element} is not present in array`);
}

rl.question("Enter the array elements : ",(input1)=>{
    rl.question("Enter the element to search ",(input2)=>{
        let arr=input1.trim().split(" ").map(Number);
      if(/^-?\d+$/.test(input2.trim())){
        let element=parseInt(input2.trim());
        linearSearch(arr,element);
      }
      rl.close();
    });
});