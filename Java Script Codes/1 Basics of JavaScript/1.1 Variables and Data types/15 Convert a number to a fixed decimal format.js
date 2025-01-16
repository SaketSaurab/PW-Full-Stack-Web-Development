// Convert a number to a fixed decimal format

// method 1 : using built in function num.toFixed(decimal places)

function fixDecimalMethod1(num,decimal_place){
    console.log(`Using method 1 : ${num} ,${decimal_place} : => ${num.toFixed(decimal_place)} `);
}


// method 2 : without using built in function
function fixDecimalMethod2(num,decimal_place){
    let x=Math.pow(10,decimal_place);
    console.log(`using method 2 : ${num}, ${decimal_place} => ${Math.round(num*x)/x}`);
}

let a=156.15366;
let b=2;
fixDecimalMethod1(a,b);
fixDecimalMethod2(a,b);