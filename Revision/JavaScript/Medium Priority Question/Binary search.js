// binary search
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


function binarySearch(input,element){
    
    let arr=input.trim().split(/\s+/).map(Number);
    let e=parseInt(element);
    if(arr.some(isNaN)|| isNaN(e)){
        console.log("Please enter valid input");
        rl.close();
        return;
    }
    console.log("Input array : ",arr);
    
}

rl.question("Enter array element in sorted order: ",(input1)=>{
    rl.question("Enter the element to search : ",(input2)=>{
        binarySearch(input1,input2);
    });
});