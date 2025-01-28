// Determine whether a given angle is acute, right, or obtuse.
const readline=require('readline');

function angleCheck(angle){
    if(angle>0 && angle<90){
        console.log(`${angle} is Acute angle`);
    }
    else if(angle==90){
        console.log(`${angle} is Right angle`);
        }
        else if(angle>90 && angle<180){
        console.log(`${angle} is Obtuse angle`);
    }
    else  if(angle==180){
        console.log(`${angle} is Straight angle`);
    }
    else   if(angle<360 && angle>180){
        console.log(`${angle} is Reflex angle`);
    }
    else if(angle===360){
        console.log(`${angle} is complete angle`);
    }
    else{
        console.log(`${angle} is not valid please enter valid angle`);
    }
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter the angle : ",(input)=>{
    const angle=parseFloat(input.trim());
    if(input.trim()!==String(parseFloat(input.trim()))|| isNaN(angle)|| angle<0|| angle>360){
        console.log(`Enter valid angle`);
    }
    else{
        angleCheck(angle);
        rl.close();
    }

})