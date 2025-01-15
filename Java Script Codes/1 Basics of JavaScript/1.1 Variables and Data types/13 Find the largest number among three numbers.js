// Find the largest number among three numbers.

function checkLargeNum(a,b,c){
    let ans=((a>b)?(a>c?a:c):(b>c?b:c));
    console.log(`the biggest number among ${a},${b} and ${c} is ${ans}`);

}
let x=565;
let y=863;
let z=428;
checkLargeNum(x,y,z);