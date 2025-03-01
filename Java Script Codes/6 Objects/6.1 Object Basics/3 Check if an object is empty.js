// Check if an object is empty
console.log("Method 1 using Object.keys");
const obj1 = {};
// const obj1={name:"sample"};
Object.keys(obj1).length === 0
  ? console.log("Object is empty")
  : console.log("object is not empty");
