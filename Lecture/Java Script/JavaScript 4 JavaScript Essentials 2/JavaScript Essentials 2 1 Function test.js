function f(x){
    console.log(x);
    x+=2;
    x-=3;
    x*=4;
    return x*7;
}
// if we do not return manually then javascript will return undefined
function g(y){
    console.log(y*3);
    let z=f(y);
    return z;
}
let ans=g(2);