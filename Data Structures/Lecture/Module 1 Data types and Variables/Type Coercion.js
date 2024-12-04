
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
    price:"249",
    inStock:false,
}
];

function calculateTotal(cart){
    let total=0;
    cart.forEach((Products)=>{
        total+= +Products.price;
    });
    return total.toFixed(2);
}

let totalPrice=calculateTotal(Products);
console.log(`total price: ${totalPrice}`);