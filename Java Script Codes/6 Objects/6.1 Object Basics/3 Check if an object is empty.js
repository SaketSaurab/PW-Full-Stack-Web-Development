// Check if an object is empty
console.log("Method 1 using Object.keys");
const obj = {};
// const obj={name:"sample"};
Object.keys(obj).length === 0
  ? console.log("Object is empty")
  : console.log("object is not empty");

console.log("Method 2 using JSON.stringify()");
JSON.stringify(obj) === "{}"
  ? console.log("object is empty")
  : console.log("Ojbect is not empty");
