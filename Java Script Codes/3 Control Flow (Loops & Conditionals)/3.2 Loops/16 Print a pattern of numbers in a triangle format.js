// Print a pattern of numbers in a triangle format.
const readline=require('readline');
function numberTriangle(a){
    let num=1;
    for(let i=1;i<=a;i++){
        let row=``;
        for(let j=1;j<=i;j++){
            row+=`${num} `;
            num++;
        }
        console.log(row);

    }
}
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter the height of the triangle ",(input)=>{
    if(/^\d+$/.test(input.trim())){
        let a=parseInt(input.trim());
        numberTriangle(a);
    }
    else{
        console.log("Enter valid number");
    }
    rl.close();
});