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

// // block scope
// console.log("Block scope");
// {
//     let z=10;
//     console.log(z);
// }
// console.log(z);  // z is not visible here

/* Ways to declare variables : 
var :  use to declare function scope and global scope variables
let : helps us to initialize block scope variables
const: const also helps us to initialize block scope variables

*/

/*
Any variable is used in two ways
RHS ->when we consume the variable
LHS ->when we assign or declare the value


*/

console.log("LHS and RHS of the variable");

var a=99; //LHS - we are assigning the value 
console.log(a); //RHS- we are consuming the value of  the variable


// Lexical scoping or lexical parsing
// JS does scope resolution using lexical scoping mechanism. also called static scoping
// 

var teacher="Sanket singh";
function fun3(){
    var teacher="sarthak";
    console.log("hello",teacher);
}
function gun2(){
    var student="aman";
    console.log(student,teacher);
}
fun3();
gun2();

// "use strict";  it prevents the creations of auto global variables