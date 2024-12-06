// Removing duplicates from an Array

/*
Methods to remove duplicates 
1.filter() method
2.set() method
3.forEach() method
4.reduce() method
*/
const inputArray=[3,6,7,4,3,7,4,3,2,2,1,2,1,8];
console.log("Filter method");
const uniqueArray=inputArray.filter((item,index)=>inputArray.indexOf(item)==index);
console.log(uniqueArray);

//set method
console.log("Set method");
const uniqueArraySet=[...new Set(inputArray)];
console.log(uniqueArraySet);

//forEach() method
console.log("for Each() method");

const uniqueArrayForEach=[];
inputArray.forEach((item)=>{
    if(!uniqueArrayForEach.includes(item)){
        uniqueArrayForEach.push(item);
    }
});

console.log(uniqueArrayForEach);


//reduce method
console.log("reduce method");
const uniqueArrayReduce=inputArray.reduce((accumulator,currentValue)=>{
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(uniqueArrayReduce);

