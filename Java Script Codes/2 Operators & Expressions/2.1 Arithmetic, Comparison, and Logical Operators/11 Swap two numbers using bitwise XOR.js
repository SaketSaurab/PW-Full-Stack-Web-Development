// Swap two numbers using bitwise XOR

function swapUsingXOR(x,y){
    console.log(`Before swap x=${x} and y = ${y}`);

    x=x^y;
    y=x^y;
    x=x^y;

    console.log(`After swap x=${x} and y=${y}`)

}

swapUsingXOR(23,62);
swapUsingXOR(14,-42);