console.log("Hello");
console.log('single quote');
console.log("double quote");
console.log("number:",10);
console.log("decimal number :", 3.79);
console.log("Big int = (2^53 -1) to -(2^53-1)",4654478484564687684645478958n);
console.log("boolean: ", true,false);
// null means : nothing or empty value
// undefined means : variable is declared but not assigned any value
//single line comments
/*
this is
multi line
comment
*/
// operators
// assignment operators

var name="pw skills";
console.log(name);
// arithamtic operators
var num1=23;
var num2=14;
var sum=num1+num2;
console.log("sum of :",num1,"and ",num2,"is ",sum);

var multiply=num1*num2;
console.log("multiplication of :",num1,"and ",num2,"is ",multiply);

var division=num1/num2;

console.log("division  of :",num1,"and ",num2,"is ",division);
// exponential 

console.log("3^4=",3**4);

//increment operator
var inc1=5;
var inc2=7;
console.log("inc1=5 , ",inc1++);
console.log(inc1);
console.log("inc2 =7 ,",++inc2);

var numm1=10;
var numm2="10";
console.log("equal",numm1==numm2);
console.log("strict equal",numm1===numm2);
// conditionals 
var age1=17;
if(age1>18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}

var age=-19;
if(age>5 && age<=20){
    console.log("You are a school student");
}
if(age>20 && age<=25){
    console.log("You are a college student");
}
if(age<0){
    console.log("Enter valid age");
}


//Loops
//for loops
//print the table of 4 
var num4=9
for(let i=1;i<=10;i++){
    console.log(num4,"x",i,"=",num4*i);
}


//while loop
console.log("while loop");
var num5=12;
let j=1;
while(j<=10){
console.log(num5,"x",j,"=",num5*j);
j++;
}

// do while loop

console.log("do while loop");
var num6=17;
let k=1;
do{
    console.log(num6,"x",k,"=",num6*k);
    k++;
}
while(k<=10){

}

//break and continue
console.log("break statement");

for(let a=1;a<=10;a++){
    console.log(a);
    if(a==8){
        break;
    }
}

console.log("continue");
for(let b=3;b<=30;b++){
    if(b%4==0){
        continue;
    }
    console.log(b);
}

//switch
console.log("switch");

let color="red";
switch(color){
    case "red": console.log("the color is red");
    break;
    case "green": console.log("The color is green");
    break;
    default: console.log("Enter valid color name");
}

// introduction to functions
console.log("introduction to functions");
function greetUser(name){
    console.log("hello",name);
}
greetUser("pw sills");

function addtion(number1,number2,number3){
    return number1+number2+number3;
}
console.log(addtion(3,63,92));

function multiplication(number4,number5,number6){
    return number4*number5*number6;
}
console.log(multiplication(3,2,9));

//string
