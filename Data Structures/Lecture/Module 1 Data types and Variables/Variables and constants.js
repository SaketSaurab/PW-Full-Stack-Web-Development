/*
var: we can declare same name multiple times using var
let: it allows the data scope differently
const: can not be reassigned
*/
var num=10;
console.log(`before block :${num}`);
{
    num=20;
    console.log(`inside block ${num}`);
}

console.log(`after block : ${num}`);