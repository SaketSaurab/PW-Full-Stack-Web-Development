// // Lexical scope
// var currentStudent="Sanket";
// console.log(bestFriend);
// function updateStudentInfo(){
//     var currentStudentLocal="Sarthak";
//     bestFriend="tanmay";
//     console.log(`the best  friend of ${currentStudentLocal} is ${bestFriend} `);
// }

function fun(){
    console.log("first", x);
    var x=10; // if we use let then it will throw error 
    console.log("second ",x);
}
fun();