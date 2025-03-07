// Find all keys and values of an object.
const person={
    name:"Ram",
    age:23,
    city:"Ayodhya"
}

// method 1 using object.keys() and object.values();
console.log("Method 1");
 console.log(`Keys : ${Object.keys(person)}`);
 console.log(`Values: ${Object.values(person)}`);

 // method 2 using Object.entries()
console.log("Method 2");
 console.log(`Entries: ${Object.entries(person)}`);

 // method 3 using for ..in loop
 console.log("Method 3 using for in loop");
 for(let key in person){
    console.log(`Key: ${key} Values: ${person[key]}`);
 }