// Find the largest of three numbers using if-else.

function largest(a,b,c){
        if(a>=c && a>=b){
            console.log(`The largest number among ${a},${b} and ${c} is ${a}`);
    }
    else if(b>=c && b>=a){
        
        console.log(`The largest number among ${a},${b} and ${c} is ${b}`);
    }
    else    {
        
        console.log(`The largest number among ${a},${b} and ${c} is ${c}`);
    }
}

largest(13,16,15);