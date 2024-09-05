// Unary operators 
let a=10;
let b=5;

console.log("a++" ,a++);
console.log("++b",++b);

// break statement
console.log("Break statement");

let i=1;
while(i<=10){
    if(i%7==0){
        break;
    }
    console.log(i);
    i+=1;
}
//continue statement
console.log("Continue statement");
let j=1;
while(j<=10){
    if(j%7==0){
        j++;
        continue;
    }
    console.log(j);
    j+=1;
}