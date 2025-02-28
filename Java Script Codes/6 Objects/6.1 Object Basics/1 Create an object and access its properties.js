// Create an object and access its properties.

const person={
    name:"Ram",
    age:25,
    city:"Ayodhya"
};
console.log("Printing using for in loop");
for(let key in person){
console.log(`${key} : ${person[key]}`);
}
console.log(`person.name: ${person.name}`);
console.log(`person.age: ${person.age}`);
console.log(`person.city: ${person.city}`);