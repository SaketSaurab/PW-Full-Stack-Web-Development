// for each loop in arrays
console.log("for each loop");
/*
arr.forEach((val)=>{
    console.log(var)});
*/


let arr=[3,5,6,3,4,6,7,45,743,876,456,876,23,65];
// forEach using call back function
console.log("forEach using call back function");
arr.forEach(function printFucntion(val){
    console.log(val);
});

// forEach using arrow function
console.log("forEach using arrow function");
arr.forEach((val) => {
    console.log(val);
});

let arr2=["delhi","pune","mumbai","goa","manali","nainital"];
arr2.forEach((val2,index) => {
    console.log(val2.toUpperCase(),index);
});