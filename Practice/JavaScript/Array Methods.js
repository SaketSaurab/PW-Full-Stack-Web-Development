//Array Methods
let fruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
// // 1 . Slice; array.slice(start,end);
// let extractedFruit=fruit.slice(2,5);
// console.log("array.slice(2,5): ",extractedFruit);

// 2 splice: array.splice(start,deleteCount,item1,item2);

// let fruit2=fruit;
// let spliceFruit=fruit2.splice(2,2,5,6);
// console.log("spliceFruit(2,2,5,6):",spliceFruit);

// 3 push: let addData=array.push('itemName');
let pushFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let pushFruit2=pushFruit.push('chapati','puri');
console.log(pushFruit2);
console.log(pushFruit);

// pop 
let popFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let popLength=popFruit.pop();
console.log("PopFruit list",popFruit);
console.log("PopFruit removed : ",popLength);

//shift :remove the first element and return the first element
let shiftFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let shiftLength=shiftFruit.shift();
console.log("ShiftFruit list: ",shiftFruit);
console.log("shift removed element: ",shiftLength);


