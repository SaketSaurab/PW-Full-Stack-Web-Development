// Swap two variables without using a third variable

let a=5;
let b=10;
// now we have to swap the value of a and b

console.log(`values before swapping a=${a}, b=${b}`);

//swapping
let temp=a;
a=b;
b=temp;
console.log(`values after swapping a=${a}, b=${b}`);