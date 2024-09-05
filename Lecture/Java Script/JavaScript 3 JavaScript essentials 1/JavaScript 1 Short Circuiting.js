// Short circuiting is applied to logical operators

// in AND operator if first operand is false then it will not check the second operand it will give false directly 
//if the first operand is true then it will return the second operand 

// truthy and falsy value in JavaScipt

// Truthy : those values which convert to true  in the boolean operation is called truthy values  rest of all is falsy values

// Falsy : those values which convert to false in the boolean operation is called falsy values

// falsy values : null , undefined, +0 , -0 , nan, " "(empty string), false

//+0 is normal 0

console.log(10 && 30);  // first operand is true so it will return the second operand that is 30
console.log(0&&2);


console.log(2||0);