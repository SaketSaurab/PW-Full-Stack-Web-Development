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
let myString1='hello single quote';
let myString2="hello double quote";
let myString3=`hello back tick`;
console.log("Types of quotes for strings");
console.log(myString1+" \n"+myString2+"\n "+myString3);

//String methods
let tempText="abcDi E F,ghi ji k,lmino";
let tempText2="Qr iS,t iu v,X yiZ"
console.log("tempText : ",tempText);

console.log("slice (7) ",tempText.slice(7));
console.log("slice (3,8)",tempText.slice(3,8));

//substring
console.log("substring(3)",tempText.substring(3));
console.log("substring(3,8)",tempText.substring(3,8));

//substr
console.log("substr(3)",tempText.substr(3));
console.log("substr(3,4)",tempText.substr(3,4));

//replace
console.log("replace(efgh,5678)",tempText.replace("efgh","5678"));

//replaceAll
console.log("this is apple and apple is fruit. replaceAll".replaceAll("is","are"));

//toUpperCase
console.log("toUpperCase:",tempText.toUpperCase());

//toLowercase
console.log("toLowerCase:",tempText.toLocaleLowerCase());

//concat
console.log("concat",tempText.concat(tempText2));

//split
console.log("split",tempText.split(","));

//indexOf
console.log("indexOf(g):",tempText.indexOf("g"));

//lastIndex
console.log("lastIndex(i):",tempText.lastIndexOf("i"));

//starWith
console.log("startwith(a):",tempText.startsWith("a"));

//endsWith
console.log("endsWith(ino):",tempText.endsWith("ino"));
console.log("endsWith(ijk):",tempText.endsWith("ijk"));

//search
//let result=str.search(searchTerm);
console.log("search (ji):",tempText.search("ji"));

//trim
console.log("trim()",tempText.trim());

//charAt()
console.log("charAt():",tempText.charAt("4"));

//at
console.log("at(1)",tempText.at(1));
console.log("at(-1)",tempText.at(-1));

//charCodeAt
console.log("charCodeAt(4):",tempText.charCodeAt("4"));


//Template Literals
//multiline literals
const tempText3=`this is sample
of multiline

literals`;

console.log(tempText3);

//string interpolation

let myName="saurabh";
let myAge=26;
const greeting=`my name is ${myName}.and my age is ${myAge}`;
console.log(greeting);

