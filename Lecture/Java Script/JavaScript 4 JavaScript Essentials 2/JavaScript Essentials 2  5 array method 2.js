let arr=[3,52,63,62,64,75,34,67];
arr.push(83,93); // add the element in the end of the array
console.log(arr);

arr.pop();// it will remove the last element
console.log(arr);

// array concatinatin
let arr1=[3,5,6,73,734,742];
let arr2=[43,74,23,76];
let arr3=arr1.concat(arr2);
console.log(arr3);

let s=arr3.join(" ,"); // it will join the array elements , it converts the array element to strings
console.log(s);

let arr6=[41,3,4,6,7,8,23,56,75];
console.log(arr6.slice(2,6)); // it will print only the elements between 2 to 6 

arr6.splice(2,0,54);// from element no.2 we have to delete 0 elements and add 54
console.log(arr6);