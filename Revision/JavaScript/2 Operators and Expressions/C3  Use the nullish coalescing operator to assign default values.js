//  Use the nullish coalescing operator to assign default values

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function fun(input){
    const value=input?? "default value";
    console.log(`Final value : ${value}`);
}

rl.question("Enter value : ",(input)=>{
    newInput=input===""?null:input;
    fun(newInput);
    rl.close();
});