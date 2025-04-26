// Write a function to compare two objects for equality
function isEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1=Object.keys(obj1);
  const keys2=Object.keys(obj2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for(let key of keys1){
    if(!isEqual(obj1[key],obj2[key])){
        return false;
    }
  }
  return true;
}


const obj1={
    name:"Shyam",
    age:25,
    address:{
        city:"Mathura",
        pin:12345
    }
}

const obj2={
    name:"Shyam",
    age:25,
    address:{
        city:"Mathura",
        pin:12345
    }
}

console.log(isEqual(obj1,obj2));