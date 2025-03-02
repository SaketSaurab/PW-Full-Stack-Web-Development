// Find the number of properties in an object.

const person = {
  name: "Shyam",
  age: 35,
  city: "Mathura",
};
console.log("Using Object.keys(person).length");
let propertyCount1 = Object.keys(person).length;
console.log(propertyCount1);

console.log("using Object.entries(persong).length");
let propertyCount2 = Object.entries(person).length;
console.log(propertyCount2);
