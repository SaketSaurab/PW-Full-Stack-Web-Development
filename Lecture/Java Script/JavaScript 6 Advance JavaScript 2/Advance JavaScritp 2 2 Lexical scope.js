// Lexical scope


console.log("Lexical Scope");


//Phase 1 

var currentStudent="Sanket";
// console.log(bestFriend);  // undefined how ?
function updateStudentInfo(){
    var currentStudentLocal="Sarthak";
    bestFriend="Tanmay";
    console.log(`The best friend of ${currentStudentLocal} is ${bestFriend}`);
}
updateStudentInfo();

// Both Let and Const works in similar way

// let gets the scope of nearest block , let is accessible only after declaration otherwise it will throw error
//var gets the scope everywhere in the funcion

// Temporal dead zone (tdz): a variable declare with let ,const and class

// let does not allowed redeclaration

// let, const and class is collectively called lexical declaration

// Function Expression
function fun(){    // functions decalration
    //
}
//function is first class citizen in javascript ;
// we can return function from function
// we can pass function as an argument to another
// we can also store a function in an variable

// storing function in a variable
const myFun=function fun(){
    //
}
