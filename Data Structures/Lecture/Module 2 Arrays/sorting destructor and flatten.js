//let sortedArray=numArray.sort();

const Products=[
    {name:"wireless mouse",price:522.5, inStock:true,},
    {name:"Keyboard",price:799.5,inStock:true,},
    {name:"data cable",price:129.9,inStock:true,},
    {name:"aux cable",price:249,inStock:false,}
    ];
//the sort() method sort the elements of an array 
// let numArray=[35,63,73,23,67,34,9,56,43,234];
// console.log("before sorting ",numArray);
// let sortedArray=numArray.sort();
// console.log("after sorting ",sortedArray);

const sortedProduct=Products.slice().sort((a,b)=>a.price-b.price);
console.log(sortedProduct);

/// Destructuring
console.log("Destructuring");
const [{ name:FirstProductName,Price:FirstProductPrice}]=Products;
console.log(FirstProductName);

const product={name:"Keyboard",price:399.9,inStock:false}
const {name,price,inStock}=product;
console.log(name,price,inStock);


//  Flatten Arrays:
console.log("Flatten Arrays");
const nestArray=[3,[35,[43,74],27,98],22];
const flatArray=nestArray.flat(Infinity);
console.log(flatArray);


