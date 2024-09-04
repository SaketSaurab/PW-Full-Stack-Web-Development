/*
#numbers represents numeric values (integer & floating point no.)
in JavaScript therse are two types of 0 (one is normal zero another is minus zero)
plus and minus infinity also exist in javaScript
number range -(2^53 -1) to (2^53 -1)
*/
let productPrice=1200;
let discount=15.2;
let x=Infinity;   // here we can directly give the infynity as number
console.log(productPrice,discount,x);
// to declare BigInt we have add n in the end of the number
let bigNumber=345876543456765433453456n;
console.log("BigInt demo :",bigNumber);

//Boolean
const isProductAvailable=false;
console.log("Is product available: ",isProductAvailable);