// Create a function to deep clone an object.
const obj = {
  name: "Ram",
  details: {
    age: 25,
    city: "Ayodhya",
  },
};

function strClone1(obj) {
  return structuredClone(obj);
}

console.log("Method 1 using structuredClone()");
const clone1 = strClone1(obj);
clone1.details.city = "Mathura";

console.log("Original city : ", obj.details.city);
console.log("Cloned city: ", clone1.details.city);
