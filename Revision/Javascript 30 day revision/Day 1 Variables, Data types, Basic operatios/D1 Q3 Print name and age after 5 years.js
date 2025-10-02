// Write a program that takes a person's name and age and prints: *"Hello NAME, you will be AGE+5 in five years.
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function askName(){
    rl.question("Enter the name : ",(input1)=>{
        const name=input1.trim();
        askAge(name);
    });
}

function askAge(name){
    rl.question("Enter the age : ",(input2)=>{
        const age=parseInt(input2.trim());

        if(isNaN(age)){
            console.log("Enter valid number for age.");
            return askAge(name);
        }
        console.log(`Hello ${name} you age after 5 years will be ${age+5}`);
        rl.close();
    });

}

askName();