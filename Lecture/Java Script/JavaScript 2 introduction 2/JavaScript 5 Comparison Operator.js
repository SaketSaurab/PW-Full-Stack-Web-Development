// comparison operator always give boolean value
let x=5;
let y=8;
let z=8;
let a="5";
let b=5;
console.log(x<y);
console.log(x>y);

console.log(y>=z);



// == operator will convert the both the value to same format 
// == is called abstract equality operator
console.log("== operator :")
console.log(x==a);

// === operator will not convert the both the value to same format 
// === is called strict equality operator
console.log("=== operator : ")
console.log(x===a);

// not equal to operators : 
//  a!=b   -> type conversion happens
    console.log("a!=b :",a!=b);
    
// a!==b   ->  no type conversion happens
    console.log("a!==b :",a!==b);