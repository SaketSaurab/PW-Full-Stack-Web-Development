// Check if a number is divisible by both 3 and 5.

function isDivisible(num){
    if(num%5==0 && num%3==0){
        console.log(`${num} is divisible by 3 and 5 both`);
    }
    else{
        console.log(`${num} is not divisible by 3 and 5`);
    }
}

isDivisible(15);
isDivisible(35);
isDivisible(60);