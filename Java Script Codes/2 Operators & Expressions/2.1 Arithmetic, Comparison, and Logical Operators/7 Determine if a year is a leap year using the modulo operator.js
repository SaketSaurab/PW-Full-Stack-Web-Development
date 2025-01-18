// Determine if a year is a leap year using the modulo operator

function leapYear(year){
    console.log(`${year} is ${(year%400==0)?'a leap year':(year%100==0?'not a leap year':(year%4==0?'leap year':'not a leap year'))}`)
}

let w=2016;
let x=1990;
let y=1800;
let z=1600;

leapYear(w);
leapYear(x);
leapYear(y);
leapYear(z);