// Array Methods
let fruit=["apple","banana","lichi","mango","Pineapple","blueberry","blackberry"];
let heros=["iron man","bat man","superman","deadpool"];
console.log(`original list:${fruit}`);
// Push(): add to the end
fruit.push("strawberry","paneer");
console.log(`list after pop ${fruit}`);
// Pop(): delete from the end
console.log("pop");
fruit.pop();
console.log(`list after pop ${fruit}`);

fruit.toString();
console.log("after toString",fruit);


// Concat method to join multiple strings
let twoArray=fruit.concat(heros);
console.log("concat :",twoArray);

// unshift method works as push method : add element in starting
heros.unshift("spider man","HanuMan");
console.log("after unshift:",heros);

//shift method will delete the element from starting
heros.shift();
console.log(`after shift:${heros}`);

// slice
let slice1to3=heros.slice(1,3);
console.log(`slice(1,3):${slice1to3}`);

//splice used to add, remove ,replace
console.log("splice");
heros.splice(2,3,"345","567","678");
console.log(heros);