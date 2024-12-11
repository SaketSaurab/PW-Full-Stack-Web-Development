// variables in javaScript
fullName="Tony Stark";
age=24;
price=299.99;
x=null;
// null: is an object , absence of an object
y=undefined;

console.log(fullName,price);
console.log("Null:",x);
console.log("undefined:",y);
console.log("type of x ",typeof(x));
num=BigInt(234);
//bigInt: 
console.log("bigInt",num,"type of num is ",typeof(num));
aSymbol=Symbol("helloo");
console.log(aSymbol," is a type of ",typeof(aSymbol));

const Student={
    FullName:"aman s",
    age:23,
    city:"pune",
    college:"aktu",
    year:3
}
console.log(Student);