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