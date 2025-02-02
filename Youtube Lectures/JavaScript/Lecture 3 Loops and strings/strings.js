// Strings

let str="hello strings";
console.log(str);

const name1=prompt("enter your name");
console.log("Your name is ",name1);

let strlen=name1.length;
console.log("length of your name is",strlen);

//template literals
console.log("template literals");
let templateString1=`this is template literals it uses "back tick" symbol which is on the left top side of keyboard`;
console.log(templateString1);

let obj={
    item:"pen",
    price:10
};

console.log("normal method to print the item name and price");
console.log("the item is",obj.item," and the price is",obj.price,"rupees");
console.log("using backtick / template literal method");
console.log(`the item is ${obj.item} and price is ${obj.price} rupees`);

// the method of using ${expression} is called string interpolation

//escape characters  \n
console.log("apna \ncollege");
// \n is used for new line
// \t is used for tab 