// Check if a number is an integer or a float.

// method one : using build in method .isInteger();
function checkNumberType1(a){
console.log(`${a} is ${Number.isInteger(a)?'integer':'float'} and checked using method 1`);
}


// method two : using % operator
function checkNumberType2(a){
    console.log(`${a} is ${a%1===0?'Integer':'Float'} and checked using method 2`);
}

checkNumberType1(2.2);
checkNumberType2(18.152);

checkNumberType1(15);
checkNumberType2(28);