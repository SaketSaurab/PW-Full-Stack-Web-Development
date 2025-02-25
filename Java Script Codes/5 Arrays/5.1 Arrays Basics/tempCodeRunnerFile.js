// Implement a binary search algorithm.

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
function binarySearch(arr,x){
    let left=0;
    let right=arr.length-1;
    let ans=-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===x){
            ans=mid;
            break;
        }
        else if(arr[mid]<x){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    console.log(result>-1?`The element ${x} is present at index: ${result}`:`The element is not present`);

}
rl.question("Enter the array elements ",(input1)=>{
    rl.question("Enter the element to search ",(input2)=>{
        let arr=input1.trim().split(" ").map(Number);
        if(/^-?\d+$/.test(input2.trim())){
            let x=parseInt(input2.trim(),10);
            binarySearch(arr,x);
        }
        else{
            console.log("Enter valid search input");
        }
        rl.close();
    });
});