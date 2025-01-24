// Write a menu-driven calculator using a switch statement


const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log(` select the number from 1 to 6 to perform specific operation : \n
            1 for Sum \n
            2 for subtraction \n
            3 for multiplication \n
            4 for division \n
            5 for modulo  \n
            6 exponential \n
    `);
rl.question("Enter the operation number : ",(num)=>{
                rl.question("Enter first number ",(a)=>{
                    rl.question("Enter the second number ",(b)=>{
                        const num1=parseFloat(a);
                        const num2=parseFloat(b);
                        let ans;
                        switch (parseInt(num)){
                            case 1:
                                ans=num1+num2;
                                console.log(`The sum of ${num1} and ${num2} is ${ans}`);
                                break;
                            case 2:
                                ans=num1-num2;
                                console.log(`The subtraction of ${num1} and ${num2} is ${ans}`);
                                break;
                            case 3:
                                ans=num1*num2;
                                console.log(`The multiplication of ${num1} and ${num2} is ${ans}`);
                                break;
                            case 4:
                                ans=num1/num2;
                                console.log(`The division of ${num1} and ${num2} is ${ans}`);
                                break;
                            case 5:
                                ans=num1%num2;
                                console.log(`The modulo of ${num1} and ${num2} is ${ans}`);
                                break;
                            case 6:
                                ans=num1**num2;
                                console.log(`The exponential of ${num1} and ${num2} is ${ans}`);
                                break;
                            default: console.log("Enter the valid number");
                        }
                        rl.close();
                    });
                });
            });
