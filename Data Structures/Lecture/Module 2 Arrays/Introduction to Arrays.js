//Introduction to arrays


// how to create array
// let arr=[2,3,5,6,7,8];
// it follows zero based indexing

let discount=[5,11,25,37,70];
console.log(discount[1]);

//adding data to array
discount.push(88);
console.log(discount);

//shift and unshif
discount.shift();  //it removes the element from beginging
                    //unshift add the element at the begining
console.log(`removes the first element ${discount}`);

