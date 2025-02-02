// Arrow Function: compact way of writing a function
//  sum function
// const functionName=(para1,para2,para3)=>{
  //     do some calculation  
//  }

const arrowSum=(a,b)=>{
    return a+b;
};
console.log("arrow sum:",arrowSum(4,5));

// multiplication arrow function
const arrowMultiply=(c,d,e)=>{
    let ans=c*d*e;
    console.log(`the multiplication of ${c},${d} and ${e} is ${ans}`);
};

arrowMultiply(3,4,6);

// printing hello world using arrow function
const hello=()=>console.log("hello world using arrow function and single line");
hello();