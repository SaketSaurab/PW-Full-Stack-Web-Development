// loops

// for loop
console.log("for loop");
for(let i=1;i<=5;i++){
    console.log("line no.",i);
}
console.log("sum of numbers up to n");
let sum=0;
let n=29;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("the sum of numbers up to ",n,"is",sum);

/*infinite loop
for(let i=1;i>0;i++){
console.log(i);
}
*/

/*while loop
    initialisation
    while(condition){
        //do the task
    updation
    }
*/
console.log("while loop");
let a=1;
while(a<=10){
    console.log(a);
    a++;
}


/*
//do while loop

do{
    // do some work
}   while(conditon);
*/
console.log("do while loop");
let b=10;
do{
    console.log("Hello ",b);
    b++;
}while(b<20);

/*
// for of loop
for(let var of strVal){
// do some work
}
*/
console.log("for of loop");
let size=0;
let str="apnaCollege";
for(let i of str){
    console.log("i =",i);
    size++;
}
console.log("the size of the string is ",size);


/*
// for in loop
for(let key in objVal){
// do some work
}
*/
console.log("for in loop");
let student={
    name:"sakal",
    age:28,
    cgpa:8.6,
    isPass:true
}
for(let i in student){
    // console.log(i); // it return only keys
    console.log("student",i,"value",student[i]);
}
