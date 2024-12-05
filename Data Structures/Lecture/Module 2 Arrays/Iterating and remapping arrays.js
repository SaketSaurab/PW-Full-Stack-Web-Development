// Iterating and remapping arrays

//iterating over arrays
/*  For Loop:
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/
console.log("For Loop:");

const Products=[
    {name:"wireless mouse",price:522.5, inStock:true,},
    {name:"Keyboard",price:799.5,inStock:true,},
    {name:"data cable",price:129.9,inStock:true,},
    {name:"aux cable",price:249,inStock:false,}
    ];
for(let i=0;i<Products.length;i++){
    console.log(Products[i].name);
}

/*  For...of Loop:

*/
console.log("For...of loop");
for(const items of Products){
    console.log(items.price);
}

/* For each loop: 
*/
console.log("For each");
Products.forEach((item)=>{
    console.log(`product ${item.name} is price at ${item.price}`)
});

// Map Method: 
console.log("Map Method");
let newProducts=Products.map((item)=>item.name);
console.log(newProducts);


/*  While Loop: 

*/
console.log("While Loop");


/* Do while loop: 


*/