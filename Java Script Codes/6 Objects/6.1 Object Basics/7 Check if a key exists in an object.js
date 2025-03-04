// Check if a key exists in an object
const people={
    name:"Ram",
    age:23,
    city:"Ayodhya",
    wife:"Seeta"
};
console.log("Method 1 using operator");
console.log("name"in people);
console.log("father"in people);

console.log("Method 2 using Object.hasOwnProperty()");
console.log(people.hasOwnProperty("name"));
console.log(people.hasOwnProperty("father"));
