// Write a function to shallow clone an object


function shoallowClone(obj){
    return{...obj};
}

const original={name:"Shyam", age:25,city:"Mathura"};
const copy=shoallowClone(original);

console.log("original ",original);
console.log("copy: " ,copy);
console.log(original===copy);