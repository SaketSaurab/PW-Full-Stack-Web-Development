/**
 *Lesson : Function in JavaScript

Introduction to Functions

 

Definition: Reusable block of code for specific tasks.
Advantages:
Code Reusability: Use functions multiple times.
Less Coding: Avoid repetitive logic (DRY principle).
2. Function Declaration and Invoking
Declaration: Use the function keyword, name the function, and write logic inside {}.
Invocation: Call the function by its name with ().
3. Function with Parameters
Parameters: Listed in the function definition.
Arguments: Values passed during invocation.
Return Values: Use return to specify the output; without it, function returns undefined.
Function Types
Declaration: Named function, no variable assignment needed.
Expression: Can be anonymous, stored in a variable.
Parameter Handling
Single/Multiple Parameters: Pass as needed.
N Number of Parameters: Use arguments keyword.
 

 

 

 

 

 

 

Arrow Function
Introduced in ES6 for concise function writing.
Declaration
Syntax: const myFunction = (param1, param2) => { // logic code };
Call: myFunction();
Key Differences
Syntax: Arrow uses =>, traditional uses function.
Arguments: Arrow functions lack their own arguments object.
Recursive Function
Function that calls itself for problem-solving via subproblems.
Key Concepts
Base Case: Stops recursion, preventing infinite loops.
Recursive Case: Function calls itself until the base case is met.
Function Chaining
Call multiple functions sequentially on an object without intermediate variables.
 

 

Anonymous Function
Defined without a name.
Created using function expression or arrow function.
Named Function Expression
Function assigned to a variable with a name.
Allows self-reference and recursion.
First Class Functions
Functions treated like variables.
Can be passed as arguments and returned from other functions.
IIFE (Immediately Invoked Function Expression)
Function executed immediately after it is defined.
// Syntax: (function() { /* code */ 
//})(); or (() => { /* code */ })();
// Pure and Impure Functions
// Pure Function: Always returns the same output for the same input, does not affect external state.
// Impure Function: May return different outputs for the same input, can modify external state.
// Callback Function
// Function passed as an argument to another function and executed after the main function.
// Higher Order Function (HOF)
// Takes one or more functions as arguments or returns a function.
// Lambda Function (Arrow Function)
// Short, anonymous function with concise syntax.
// Function Currying
// Transforms a function with multiple parameters into a sequence of functions with a single parameter.
//  */