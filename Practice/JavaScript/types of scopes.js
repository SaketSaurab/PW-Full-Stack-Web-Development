// types of scopes: global scope , function scope , block scopes
//global scope : variable is accessible throughout the programs
//eg. 
let x=10;
function fun1(){
    console.log(x);
}
fun1();
console.log("the value of x is ",x);

// var is used to declare function or global scope
//let is used to declare block scope variables
//const is used to initialise blocked scopre variables

// lexical scoping/ lexical parsing
//js does scope resolution using lexical scoping mechanism
function fun2(){
    console.log("the value of x is ",x);
    var x=10;
}///this code will not throw error but if we use let x=10 then it will throw error

/* method to invoke the creation of auto global : 
"use strict";    // add this line from where you want to make your code to invoke the creation of global scope
*/
