/*
1. Primitive data types:Number,string,boolean,Undefined,Null,Symbol,bigint
2. (non premitive) Reference Data types:Objects,Arrays,Functions
*/

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

function printProductDetails(Products){
    Products.forEach((Products)=>{
        console.log(`Product Name:${Products.name}`);
        console.log(`Price:${Products.price}`);
        console.log(`In stock:${Products.inStock}`);
    });
}

printProductDetails(Products);