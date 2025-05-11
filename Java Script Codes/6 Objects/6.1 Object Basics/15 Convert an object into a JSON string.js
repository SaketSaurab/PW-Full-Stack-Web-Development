// Convert an object into a JSON string.

const person = {
  name: "Ram",
  age: 25,
  city: "Ayodhya",
  wife: "Sita",
};

let jsonStr = JSON.stringify(person);
console.log(jsonStr);
