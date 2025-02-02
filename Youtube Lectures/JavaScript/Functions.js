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
arr1.forEach((val,idx,arr1)=>{
    console.log(val.toUpperCase(),idx,arr1);
});

//Array Map method: map returns new array

let num2=[3,52,632,34,734];
num2.map((val)=>{
console.log(val)
});

//Filter method
let num3=[34,22,63,63,23,64,74,88,76,5,54,12,13,16,19,23,29];
let evenNum=num3.filter((val)=>{
    return val%2===0;

});
console.log(evenNum);

//reduce method
let num4=[3,4,7,3,6,97,23,65,345,767,454,237];
const output=num4.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);


//students mark with 90+
let marks=[73,26,34,75,78,99,93,90,89,48,49,94,9,80];
let toppers=marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

// create array from 1 to n
let n=34;
let arrayN=[];
for(let i=1;i<=n;i++){
    arrayN[i-1]=i;
}
console.log(arrayN);
//use the reduce method to add the numbers
const reduceOutput=arrayN.reduce((res,curr)=>{
    return res+curr;
})
console.log(reduceOutput);

