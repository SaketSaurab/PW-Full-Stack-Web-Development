// Merge two objects
const obj1 = {
  name: "Ram",
  age: 28,
};
const obj2 = {
  city: "Ayodhya",
  brothes: "3",
};

console.log("Using Object.assign()");
const mergeObj1 = Object.assign({}, obj1, obj2);
console.log(mergeObj1);

console.log("Using Spread operator ...");
const mergeObj2 = { ...obj1, ...obj2 };
console.log(mergeObj2);
