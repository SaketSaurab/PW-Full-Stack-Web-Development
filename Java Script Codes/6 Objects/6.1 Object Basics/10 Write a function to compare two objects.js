// Write a function to compare two objects.
const obj1 = {
  name: "Ram",
  age: 25,
  city: "Ayodhya",
};
const obj2 = {
  name: "Ram",
  age: 25,
  city: "Ayodhya",
};

const obj3 = {
  name: "Shyam",
  age: 36,
  city: "Mathura",
};

function areEqual1(obj1,obj2){
    let ans= JSON.stringify(obj1)===JSON.stringify(obj2);
    ans?console.log("Obj1 and obj2 are equal"):console.log("Obj1 and obj2 are not equal");
}
function areEqual2(obj1,obj3){;

    let ans= JSON.stringify(obj1)===JSON.stringify(obj3);
    
    ans?console.log("Obj1 and obj are equal"):console.log("Obj1 and obj are not equal");
}

areEqual1(obj1,obj2);
areEqual2(obj1,obj3);