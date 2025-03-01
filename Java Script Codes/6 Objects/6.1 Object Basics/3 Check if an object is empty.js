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

console.log("Method 3 using for in loop ");
let isEmpty = true;
for (let key in obj) {
  isEmpty = true;
  break;
}
isEmpty ? console.log("Object is empty") : console.log("Object is not empty");
