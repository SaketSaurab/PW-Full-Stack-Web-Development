let arr1=[]; // empty array
console.log(arr1);
let arr2 =["hello", 1,35,true, null ,"world"];
console.log(arr2);

console.log(arr2[3]);// access an element at an index

// we can update the element also

arr2[3]=43;
console.log(arr2);
arr2[12]="temp";
console.log(arr2);// it will give <6 empty items>, because there is no element defined


// another way of declaring array 
let arr3 = new Array(10,32,53,67);
console.log(arr3);

// another way of declaring array 
let arr4 = new Array(3); // it will make array with size 3 
console.log(arr4);

// another way of declaring array 
let arr5 = new Array(3).fill(-1); // it will make array with size 3  and fill -1 data
console.log(arr5);

// array functions

let arr6= [3,5,2,6,34,65,2];
console.log(arr6.length); // length is not a function  it is a property/key

arr6.push(10); // add element in the end
console.log(arr6)

arr6.pop();// removes the element from the end
console.log(arr6);

arr6.shift(); // remove the element from the starting
console.log(arr6);

arr6.unshift(123);// add the element in the starting 
console.log(arr6);

arr6.reverse();
console.log(arr6);

console.log(arr6.indexOf(34)); // returns the index of the element