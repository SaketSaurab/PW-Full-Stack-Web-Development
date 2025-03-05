// Convert an object into an array.

const person={
    name:"Shyam",
    age:25,
    city:"Mathura"
};

// method 1
console.log("Method 1 using Object.keys(person)");
let keyArr=Object.keys(person);
console.log(keyArr);

// method 2

console.log("Method 2 using Object.values(person)");
let valueArr=Object.values(person);
console.log(valueArr);


// method 3 
console.log("Method 3 using Object.entries(person)");
let entriesArr=Object.entries(person);
console.log(entriesArr);