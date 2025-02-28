//  Add and remove properties from an object.

const person={
    name:"Shyam",
    age:35,
    city:"Mathura"
};

console.log("Before adding person.nickName");
for(let key in person){
    console.log(`${key}:${person[key]}`);
}
person.nickName="Kanha";
console.log("After adding person.nickName");
for(let key in person){
    console.log(`${key}:${person[key]}`);
}

delete person.age;
console.log(`after delete person.age`);
for(let key in person){
    console.log(`${key}:${person[key]}`);
}