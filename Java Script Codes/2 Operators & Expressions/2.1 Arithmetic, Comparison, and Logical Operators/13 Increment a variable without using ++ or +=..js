// Increment a variable without using ++ or +=.

// method 1 using bitwise not operator

function addOne(a){
    console.log(`the increment of ${a} will become ${-~a}`);
}

function subractOne(x){
    console.log(`the decrement of ${x} will become ${~-x}`);
}

addOne(7);
subractOne(18);