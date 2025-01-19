// Use the NOT operator to check if a variable is falsy

function isFalsy(a){
    if(!a){
        console.log(`${a} is falsy.`);
    }
    else{
        console.log(`${a} is truthy`);
    }
}

isFalsy(false);
isFalsy(true);
isFalsy(0);
isFalsy(1);
isFalsy(20);
isFalsy("");
isFalsy(" ");
isFalsy("a");
isFalsy(null);
isFalsy(undefined);
isFalsy(NaN);