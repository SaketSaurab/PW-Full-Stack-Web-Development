//introduction to objects
let Product={
    name:'iphone',
    company:'apple',
    price:12000,
    warranty:3,
    color:'red'
}
console.log(Product);

//Mutability and immutability in JS
//variable initialize with const can not be updated and it become immutable
const a=10;
// a=5;     this is not allowed
console.log(a);

const obj1={x:15,y:18};
console.log(obj1);
obj1.x=25;
obj1.y=28;
console.log(obj1);  // this is allowed


// method to achive immutability
//object.seal : updation is allowed but deletion and additon of data is not allowed

//object.freeze: can not add,delete or update existing key value pair


//object.isFrozen:if object is frozen then it will give true for frozen and seal both 
//object.isSear: if object is sealed then it will give true only for isSealed

