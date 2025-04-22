// Implement binary search
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stout
});

function binarySearch(input,e){

}


rl.question("Input the array : ",(input)=>{
    rl.question("Enter the element to search : ",(e)=>{
        let arr=input.split(" ").map(Number);
        let a=e.map(Number);
        if(!arr.every(num=>!isNaN(num)) || /^\d+$/.test(a.trim)){
            binarySearch(arr,a);
            rl.close();
        }
        else{
            console.log("Enter valid input");
        }
    });
});