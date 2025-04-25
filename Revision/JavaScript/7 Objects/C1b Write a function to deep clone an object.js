// Write a function to deep clone an object

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
const original={name:"bob",address:{city:"new York"}}
const copy=deepClone(original);


copy.address.city="New Delhi";
console.log("Original : ", original);
console.log("Copy : ",copy);