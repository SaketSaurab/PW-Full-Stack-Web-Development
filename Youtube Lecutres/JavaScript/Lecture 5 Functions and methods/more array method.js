// map array method
let arr1=[3,52,76,35,98,6,45];
arr1.map((val1)=>{
console.log(val1);
});


    let arr2=[65,32,76,34,65,34,65,123,43,345,76,987,654];
    let newArr1=arr2.map((val2)=>{
        return val2;
    });
console.log("using new array:",newArr1);


// filter method 
console.log("filter method");
/* let newArr=arr.filter((val)=>{
    return val%2==0;
});*/

let arr3=[65,32,76,34,65,34,65,123,43,345,76,987,654];
let newArr2=arr3.filter((val3)=>{
    return val3%2==0;
});
console.log("even numbers :",newArr2);

// reduce method
/*

*/
console.log("reduce method");

let arr4=[65,32,76,34,65,34,65,123,43,345,76,987,654];
const output=arr4.reduce((result,current)=>{
    return result+current;
});
console.log(`array after reduce method ${output}`);

// practice question 1
// student with 90+ marks
let marks=[88,67,87,98,91,89,90,95,46,59,97,23,43,15,19,90];
const topper=marks.filter((val)=>{
    return val>=90;
});
console.log(`toppers are ${topper}`);

// practice question 2

let arraySize=prompt("enter a number");
let arr5=[];
for(let i=0;i<arraySize;i++){
    arr5[i]=i+1;
}
console.log(arr5);

let reduceArr=arr5.reduce((result,num)=>{
    return result+num;
});
console.log(reduceArr);

let productArr=arr5.reduce((prod,num)=>{
    return prod*num;
});
console.log(`product of numbers: ${productArr}`);
