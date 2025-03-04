// Clone an object without reference.
const obj={name:"Rahul Dravid",nickName:"The wall"}

console.log("Method 1 using JSON.parse(JSON.stringify(obj)");
const cloneObj1=JSON.parse(JSON.stringify(obj));
console.log(cloneObj1);