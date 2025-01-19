// Find the remainder of division without using the modulus operator

function division(dividend,divisor){
    console.log(`If we divide ${dividend} by ${divisor} we will get remainder of ${dividend-(Math.floor(dividend/divisor)*divisor)}`)
}

division(10,3);
division(29,3);
