/**
 * # Create a command-line Node.js program that simulates a basic calculator. The program should allow
users to perform addition, subtraction, multiplication, and division operations on two numbers.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const calculator = async () => {
    const num1 = parseFloat(await askQuestion('Enter the first number: '));
    const num2 = parseFloat(await askQuestion('Enter the second number: '));
    const operation = await askQuestion('Choose an operation (add, subtract, multiply, divide): ');

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log('Cannot divide by zero');
                rl.close();
                return;
            }
            break;
        default:
            console.log('Invalid operation');
            rl.close();
            return;
    }

    console.log(`The result is: ${result}`);
    rl.close();
};

calculator();
