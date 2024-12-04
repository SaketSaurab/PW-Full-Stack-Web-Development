//type conversion and detection

//type detection
let balance=1000.0;
// console.log(Number.isNAN(balance));  /* isNAN : is not a number*/ 
console.log(typeof balance);


let Products=[{
    name:"wireless mouse",
    price:522.5,
    inStock:true,
},
{
    name:"Keyboard",
    price:799.5,
    inStock:true,
},
{
    name:"data cable",
    price:129.9,
    inStock:true,
},
{
    name:"aux cable",
    price:249,
    inStock:false,
}
];
console.log(typeof Products);

console.log(5+"3");
console.log(5* "2");
console.log(5-"3");
