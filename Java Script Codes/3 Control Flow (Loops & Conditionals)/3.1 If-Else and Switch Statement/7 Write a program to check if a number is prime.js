// Write a program to check if a number is prime.

const readline=require('readline');

function isPrime(a){
    let prime=true;
    if(isNaN(a) || a<2 || !Number.isInteger(a)){
        console.log(`${a} is not a valid input for prime number check`);
        return;
    }
        for(let i=2;i<=Math.sqrt(a);i++){
            if(a%i===0){
                prime=false;
                break;
            }
        }

    if(prime){
        console.log(`${a} is a prime number`);
    }
    else{
        console.log(`${a} is not a prime number`);
    }
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter the number to check :",(num)=>{
    const x=Number(num.trim());
    if(!isNaN(x)){
        isPrime(x);
    }
    else{
        console.log(`${num} is not a valid input`);
    }
    rl.close();
});