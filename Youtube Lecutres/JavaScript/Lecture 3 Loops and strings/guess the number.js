// guess the number
let gameNum=12;
let userNum=prompt("guess the number");
while(userNum != gameNum){
    userNum =  prompt("you are wrong , guess again");
}
console.log("you guess the right number");