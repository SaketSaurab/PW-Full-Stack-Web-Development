// Find the data type of a given variable

let a=1;
let b="text";
let c=945675678967895678678n;
let d=true;
const e=Symbol('mySymbol');
let f;
let g=null;


console.log(`
        the value of a=${a} and type of a is ${typeof(a)} \n
        the value of b=${b} and type of b is ${typeof(b)} \n
        the value of c=${c} and type of c is ${typeof(c)} \n
        the value of d=${d} and type of d is ${typeof(d)} \n
        the value of e=${e.toString()} and type of e is ${typeof(e)} \n
        the value of f=${f} and type of f is ${typeof(f)} \n
        the value of g=${g} and type of g is ${typeof(g)} \n
    `);