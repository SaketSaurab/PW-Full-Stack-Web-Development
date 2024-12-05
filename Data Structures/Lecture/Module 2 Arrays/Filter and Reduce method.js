// filter and reduce method

// map method

const Products=[
    {name:"wireless mouse",price:522.5, inStock:true,},
    {name:"Keyboard",price:799.5,inStock:true,},
    {name:"data cable",price:129.9,inStock:true,},
    {name:"aux cable",price:249,inStock:false,}
    ];
const ProductNames=Products.map((items) => items.name);
console.log(ProductNames);

const UpdatedPrice=Products.map((items) =>items.price=items.price+10);
console.log(UpdatedPrice);

// Filtering Arrays:
console.log("Filtering Arrays");
const inStockProducts=Products.filter((item)=>item.inStock);
console.log(inStockProducts);

// Reducing Arrays
console.log("Reducing Arrays");
const totalPrice=Products.reduce((total,item)=>total+item.price);
console.log(totalPrice);
