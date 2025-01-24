// Check if a given year is a leap year

const readline=require('readline');

function leapYearCheck(year){
    const result=(year%400===0?`${year} is a leap year`
    :(year%4===0 && year%100 !==0)?`${year} is a leap year`
    :`${year} is a not leap year`);

    console.log(result);
}
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter year to check ",(year)=>{
    if(!isNaN(year) && year>0){
        leapYearCheck(parseInt(year));
    }
    else{
        console.log(`${year} is not a valid year`);
    }
    rl.close();
});