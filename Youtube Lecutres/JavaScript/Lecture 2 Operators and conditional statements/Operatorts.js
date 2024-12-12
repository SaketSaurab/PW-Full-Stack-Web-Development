// this is single line  comment
/*
this is multi line comment
*/
console.log("Hello world!");

/*operators in js
+, - ,* ,/
modulus,exponential, increment , decrement

*/
let a=3;
let b=4;
console.log("a = ",a,", b = ",b);
console.log("a*b =",a*b);

//exponentiation  a**b= a^b;
console.log("a^b = ",a**b);

// unary operator
console.log("unary operator");
console.log(a++);
console.log(a++);

// comparison operator : equal to ==, equal to and type ===, not equal to !=, not equal to and type !==
console.log("comparison operator");
let c="8";
let d=8;
console.log("c:",c," d:",d);
console.log("c==d : ",c==d, "and c===d : ",c===d);

// logical operators

// conditional statements

console.log("conditional statement");
let age=19;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you can not vote this year but you can vote after",18-age,"years");
}

// ternary operators
console.log("ternary operator");
// condition ? true output : false output
let age2=25;
let result =age2>=18? "adult": "not adult";
console.log(result);

// switch statement
console.log("switch statement");
const fruit="apple";
switch(fruit){
    case'orange':console.log("fruite is orange");
    break;
    case 'apple':console.log("fruite is apple");
    break ;
    case 'papaya':console.log("fruit is papaya");
    break;
    default: console.log("enter valid fruit name");
}


console.log("alert");
alert("hello alert");// one time alert message
console.log("get user input");
let name1=prompt("enter your name");
console.log("your name is ",name1);

let num=prompt("enter a number");
if(num%5==0){
    console.log("you enter",num,"and it is multiple of 5");
}
else{
    console.log("you enter",num,"and it is not the multiple of 5");
}


// grades to the students based on marks

let marks=prompt("enter your marks");
if(marks>=90 && marks<=100){
    console.log("you scored",marks,"and your grade is A");
}
else if(marks>=70 && marks<=89){
    console.log("you score",marks,"and your grade is B");
}
else if(marks>=60 && marks<=69){
    console.log("you score",marks,"and your grade is C");
}
else if(marks>=50 && marks<=59){
    console.log("you score",marks,"and your grade is D");
}

else if(marks>=0 && marks<=49){
    console.log("you score",marks,"and your grade is F");
}
else{
    console.log("please enter the valid marks between 0 to 100");
}


