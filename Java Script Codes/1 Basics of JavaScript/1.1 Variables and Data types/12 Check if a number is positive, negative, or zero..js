// Check if a number is positive, negative, or zero.

function numberCheck(a){
    if(a>0){
        console.log(`${a} is positive number`);
    }
    else if(a<0){
        console.log(`${a} is negative number`);
    }
    else if(a==0){
        console.log(`${a} is zero `);
    }
    else{
        console.log(`${a} is not a valid number. Please enter a valid number`);
    }
}
let a=15;
let b=-10;
let c=0;
let d="abcd";
numberCheck(a);
numberCheck(b);
numberCheck(c);
numberCheck(d);

