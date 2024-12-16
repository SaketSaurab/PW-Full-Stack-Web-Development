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