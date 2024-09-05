console.log("If condition");
let userIsSignedIn=(true);
if (userIsSignedIn) {
    console.log("Opening home page")
}
else {
console.log("Login first");
}

///// else if 

console.log("Hot star login page");
// let user="unsubscribed";
let user ="super";
// let user ="premium";

if(user=="unsubscribed"){
    console.log("Show pricing and plan page");
}
else if(user=="super"){
    console.log("Showing only indian shows and series");
}
else if(user=="premium"){
    console.log("Show all type of contents");
}

/// Nested if else

console.log("Nested if else ");

let isUserSubscribed=true;
let isUserPremium=true;
if(isUserSubscribed){
    if(isUserPremium){
        console.log("Enjoy watching premium contents");
    }
    else{
        console.log("Enjoy watching subscribed content only");
    }
}
