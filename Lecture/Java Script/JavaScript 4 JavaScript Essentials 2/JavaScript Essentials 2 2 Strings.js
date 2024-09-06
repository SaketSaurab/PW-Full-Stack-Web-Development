/*\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \{, \}, \|, \/

\xHH
\uHHHH
\u{HHH}*/

// if we want to use "" in text we use /" 
console.log("Hello every one \" this text is inside double quote\" ");

const a="hello";
const b="everyone";
console.log(a+b); //string concatination : it make new string by combining the strings

const firstName="saket";
console.log(firstName.concat(" $ ","Singh"));

console.log(firstName.toUpperCase()); // it will make text upper case

const a1="abc";
const a2="def";
const a3="ghi";
console.log(a1,a2,a3); // this concatination will give space between them 

// so we will use this method
let result="";
result=result+a1+a2+a3;
console.log(result)

// in javascript functions are first class citizen
/// in javascript functions can be returned from a function and function can be passed as an argument to another function
function someFunction(){
    // computation
    return function x(){
        return 10;
    }
}

function anotherFunction(f1){
    f1();
    console.log("Called f1");
}
function hello(){
    console.log("Hello world");
}

anotherFunction(hello);