/*

Hello World Program

In JavaScript, the classic "Hello World" program is a simple way to verify that your JavaScript environment is set up correctly. Here's how to do it:
This code uses the console.log() function to output the message "Hello World!" to the browser's developer console.
Variables

Variables are used to store information that can be changed throughout your program. They are declared using the var, let, or const keywords, followed by the variable name and an optional assignment value.
var (mostly avoided in modern JavaScript due to scoping issues):
let (preferred for variable declaration):
const (used for declaring constant values): 
Playing with variables

JavaScript allows you to perform various operations with variables:

Reassignment: You can change the value stored in a variable after it's declared.
Arithmetic operations: Use arithmetic operators like +, -, *, and / on numeric variables.
String concatenation: Use the + operator to combine strings.
Variable Names

JavaScript variable names must follow these rules:

Start with a letter, underscore (_), or dollar sign ($).
Subsequent characters can be letters, numbers, underscores, or dollar signs.
Case-sensitive (e.g., age is different from Age).
Reserved keywords (like if, for, var) cannot be used as variable names.
Variables facts

JavaScript variables are dynamically typed, meaning their type is determined at runtime based on the value assigned.
You can use the typeof operator to check the type of a variable:
Hoisting: var variables are hoisted (declared at the top of their scope), while let and const are not. This can lead to unexpected behavior with var.
Strings

Strings are sequences of characters enclosed in single or double quotes. You can use various methods to manipulate strings:

Accessing characters: Use square brackets [] with the character index (starting from 0).
String concatenation: Combine strings using the + operator.
String methods: JavaScript provides built-in methods for string manipulation, such as toLowerCase(), toUpperCase(), slice(), etc.
Numbers, BigInt

Numbers in JavaScript can be integers (whole numbers) or floating-point numbers (decimals).
BigInt type (introduced in ES2020) allows for arbitrarily large integers.
null & undefined

null represents the intentional absence of a value.
undefined indicates a variable has been declared but not assigned a value.
Typeof

The typeof operator is used to determine the data type of a variable. It returns a string indicating the type.
Comments

Single-line comments: Start with // and extend to the end of the line.
Multi-line comments: Start with /* and end with */ /*They can span multiple lines.


*/