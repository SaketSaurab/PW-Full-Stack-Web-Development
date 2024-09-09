//Important object methods 
// consider we have object like this 
let product={
    name:"iphone 14 pro",
    company:"Apple",
    price:139000,
    warranty:"1 years",
    color: "black"
}
// all the key inside an object  always unique , we can not have duplicate key in an object

//Object.keys() -> is used to fetch all the unique keys

Object.keys(product);  //-> it will return the array of strings 
// output will be :  ['name', 'company', 'price', 'warranty', 'color']

Object.values(product); // -> used to fetch values
// output will be :  ['iphone 14 pro', 'Apple', 139000, '1 years', 'black']

Object.entries(product)//-> used to fetch key with value
/*
output will be : 
[
  [ 'name', 'iphone 14 pro' ],
  [ 'company', 'Apple' ],
  [ 'price', 139000 ],
  [ 'warranty', '1 years' ],
  [ 'color', 'black' ]
]
*/

// Mutability  and Immutability in  JS objects
//Mutable : values can be updated 
//Immutable : values can be updated, We use const  to make immutable

// in object const is not fully immutable.
console.log("const object");
const obj={x:38,y:23};
obj.x=89;  //updating the value of x
console.log(obj);
obj.z=55; // adding one more key value pair to obj
console.log(obj);

/*
Can we make object fully immutable
there are two methods : Object.seal and Object .freeze

Object.seal : using this method we can not add new key value pairs or delete and existing value pair 
it allows update of the existing values pairs

*/
const product2={name:"iphone",price:129000}
Object.seal(product2);
console.log(product2);
product2.company="apple";  //trying to add company to product2
console.log(product2);
delete product2.name;  // trying to delete name but it will be not deleted
console.log(product2);  

product2.name="iphone pro maxx"; //it will update the name 
console.log(product2);


console.log("object.freeze");
/*
object.freeze  : using this we can not add delete or update the existing key value pairs

this provides highest level of immutability 


*/


/*

Object.isFrozen() : is used to check wheather it is frozen or not
Object.isSealed()    : is used to check wheather it is sealed or not

if an object is frozen then it will return true for both frozen and sealed
console.log(Object.isFrozen(product2));  //it will return true
console.log(Object.isSealed(product2));  //it will return true


if object is sealed then it will return true for isSealed and false for isFrozen
*/



/*
Object.preventExtension(product);
it is 50% of seal
in this adding of new key value pair is not possible but deletion and update is allowed

*/
/*
Object.defineProperty();  // it gives control for  specific key to make it editable or non editable
this function is very powerful it gives granular controls (as writable,configurable)


*/
console.log("Object.defineProperty");
console.log("before : ",product2);
Object.defineProperty(product2,'name',{writable:false});
product2.name="samsun";
console.log("after",product2);


Object.defineProperty(product2,'name',{confiugrable : false,writable:false});  // it will make it non editable and non deletable    