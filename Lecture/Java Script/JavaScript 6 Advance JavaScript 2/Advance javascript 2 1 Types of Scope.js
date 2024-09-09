// Types of scope
/*
every javascript code is executed in 2 phase
Phase 1. compilation and scope resolution
Phase 2. Interpretation or execution phase

Scope resolution

types of scopes in JavaScript
a. global scope
b.function scope
c.block scope


*/

// Global scope
console.log("Global scope");
let x=10;
function fun(){
    console.log(x);
}
fun();
console.log("value of x is ",x);

// Function scope

console.log("Function scopee");
/*
function fun2(){
    let y=10;
    console.log(y);
}
function gun(){
    for(let i=0;i<y;i++){    } //y is not visible here
}
fun2();
gun();
console.log("the value of y is ",y); // y is not visible here
*/

// block scope
console.log("Block scope");
{
    let z=10;
    console.log(z);
}
console.log(z);  // z is not visible here

/* Ways to declare variables : 
var :  use to declare function scope and global scope variables
let : helps us to initialize block scope variables
const: const also helps us to initialize block scope variables

*/
