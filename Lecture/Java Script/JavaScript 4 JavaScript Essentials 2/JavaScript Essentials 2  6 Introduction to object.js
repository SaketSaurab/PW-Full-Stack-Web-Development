let obj={id:302,name:"allen",city:"kota",fees:30000};
console.log(obj);

let obj2=new Object();
obj2.id=878;
obj2.salary=394998;
obj2.city="pune";
console.log(obj2);

function emp(i,n,s ){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const a=new emp(856,"amy",45256);
console.log(a);

console.log(obj2.id);
console.log(obj2['city']);

obj2.id=33;//we can update key pair value in object
obj2.home="mumbai"; // we can add any key pair value in object
console.log(obj2['home']);

console.log(obj2);

delete obj2.id // deleting any key value pair

console.log(obj2);