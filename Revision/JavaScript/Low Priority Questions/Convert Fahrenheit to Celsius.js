// Convert Fahrenheit to Celsius
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function inputValidation(input){
    return /^[-+]?\d+(\.\d+)?$/.test(input.trim());
}

function celsius(input){
    let f=parseFloat(input);
    let c=(f-32)*5/9;
    console.log(`${f}°F in celsius is equal to ${c}°C`);

}

rl.question("Enter the temprature in Fahrenheit : ",(input)=>{
if(inputValidation(input)){
celsius(input);
}
else{
    console.log("Enter valid input");
}
rl.close();
});