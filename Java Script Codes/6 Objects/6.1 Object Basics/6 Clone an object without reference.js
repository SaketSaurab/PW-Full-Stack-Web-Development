// Clone an object without reference.
const obj = { name: "Rahul Dravid", nickName: "The wall" };

console.log("Method 1 using JSON.parse(JSON.stringify(obj)");
const cloneObj1 = JSON.parse(JSON.stringify(obj));
console.log(cloneObj1);

console.log("Method 2 using ... spread operator");
const cloneObj2 = { ...obj };
console.log(cloneObj2);

console.log("method 3 using structuredClone()");
const cloneObj3 = structuredClone(obj);
console.log(cloneObj3);
