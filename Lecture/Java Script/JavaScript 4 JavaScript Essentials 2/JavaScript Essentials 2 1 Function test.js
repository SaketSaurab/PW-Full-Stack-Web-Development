function f(x){
    console.log(x);
    x+=2;
    x-=3;
    x*=4;
    return x*7;
}

function g(y){
    console.log(y*3);
    let z=f(y);
    return z;
}
let ans=g(2);

// if we do not return manually then javascript will return undefined
function test(){
    let a=10;
    a+=4;
}
let ans2=test();
console.log(ans2);

// default parameter
function summ(b,c=5){

return b+c
}
console.log(summ(3));

// we can give manuan input for default parameter
function summ(b,c=5){

    return b+c
    }
    console.log(summ(3,8));

// Parameter with cache
function summ(b,c=5,d){
// in this case 3 will be allocated to b and 8 will be allocated to c 
    return b+c+d
    }
    console.log(summ(3,8));
    // in this case 3 will be allocated to b and 8 will be allocated to c 

    // to give unlimite numbers of parameters
    function fun(...values){
        // ... is called rest parameters
        console.log(values);
    }
    fun(38,32,97,89);