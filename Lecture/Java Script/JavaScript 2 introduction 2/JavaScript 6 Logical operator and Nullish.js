// Logical operators : these operators works only on boolean expression and values .

// Logical AND (&&)
console.log(false&& true);
console.log(true&& false);
console.log(false && false);
console.log(true && true);

console.log(3<5 &&4>1);

//Logical OR (||)
console.log("Logical OR")
console.log(false|| true);
console.log(true || false);
console.log(false || false);
console.log(true || true);

// Logical NOT (!)
console.log("Logical NOT");
console.log(!true);
console.log(!false);

//nullish coalescing operator  (??)
// (x??y) -> if x is undefined then it will return y otherwise it will return x 
//it works on only null and undefined objects only
console.log("nullish coalescing operator");
console.log("(10 ?? 30) : ",10??30);

console.log("(null ?? 20 )",null??20);

