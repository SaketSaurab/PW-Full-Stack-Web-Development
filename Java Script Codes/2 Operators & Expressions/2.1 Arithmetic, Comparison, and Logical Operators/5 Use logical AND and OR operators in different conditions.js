// Use logical AND and OR operators in different conditions.

// voting 

function ableToVote(a,b){
    if(a>=18 && (b.toLowerCase()==="indian")){
        console.log(`You are ${a} years old and you are Indian so you can vote`);
    }
    else if(a>=18 && (b.toLowerCase() !=="indian") ){
        console.log(` You are ${a} years old but you are ${b} so you can not vote`);
    }
    else if(a<18 && (b.toLowerCase()== "indian")){
        console.log(`you are Indian but you are only ${a} years old so you can not vote`);
    }
    else if(a<18 && (b.toLowerCase() !=="indian")){
        console.log(`your age is only ${a} and also you are ${b} so you can not vote`);
    }
}

let a=25;
let b="IndIaN";
ableToVote(a,b);

let c=16;
let d="INdian";
ableToVote(c,d);

let e=38;
let f="aMERIcan";
ableToVote(e,f);

let g=12;
let h="canadian";
ableToVote(g,h);