// // Lexical scope
// var currentStudent="Sanket";
// console.log(bestFriend);
// function updateStudentInfo(){
//     var currentStudentLocal="Sarthak";
//     bestFriend="tanmay";
//     console.log(`the best  friend of ${currentStudentLocal} is ${bestFriend} `);
// }

// function fun(){
//     console.log("first", x);
//     var x=10; // if we use let/const then it will throw error 
//     console.log("second ",x);
// }
// fun();

//if we use const then it will throw compilte time error
// if we use let then it will will become tdz (temporal dead zone)

//types of Function Expression
/*
1. Named function expression
const myFun=function fun(x){
console.log("Calling ....",x);
}
*/


/* 
2. anonymous function expression
const myFun=function (x){
console.log("calling.....",x);
}
*/

/* 
3. Arrow function or Arrow function expression

const myFun=()=>{
    console.log("Calling.....",x);
    }
*/


/* 
4.IIFE function (immediately invoked function expression)
(function fun(){
console.log("calling...",x);
})(10);
*/
