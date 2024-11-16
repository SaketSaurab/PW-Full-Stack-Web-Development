// function test
function myFunction1(){
    console.log("Welcome to apna college");
    console.log("I am learning function in JS");
}
myFunction1();

//method 2
function myFunction2(msg){
    console.log(msg);
}
myFunction2("I love MERN");

// nan means not a number

// sum of two numbers
 function sum1(a,b){
    console.log(a+b);
 }
 sum1(8,11);

//sum of two numbers second method
 function sum2(a,b){
    add=a+b;
    return add;
 }
sum2(8,8); // it will not print the value but it will give the value

let val=sum2(9,9);
console.log(val); // it will print the sum of 9,9 

//Arrow functions =>

console.log("Arrow Function");

const arrowSum1=(a,b)=> {
    console.log("arrow sum1 function",a+b);
}
arrowSum1(8,19);
const arrowMultiply1=(a,b)=>{
    console.log("arrow multiplication function",a*b);
}
arrowMultiply1(3,8);

//we prefer arrow function for small function or small work

//count the number of vovels in string

function countVowels(str){
    let countt=0;
    for(const char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
        countt++;
        }
    }
    console.log("the number of vowels in ",str,"is ",countt);
}
countVowels("AeiiIasidlo");

// create an arrow function to perform the same task
const countVow=(str1)=>{
    let countt=0;
    for(const char of str1){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
        countt++;
        }
    }
    console.log("the number of vowels in ",str1,"is ",countt);
}
countVow("hi hello guys");

//forEach
console.log("forEach");
let arr1=["pune","delhi","lucknow"];
arr1.forEach((val)=>{
    console.log(val.toUpperCase());
});