// call back function
// function h(x,fn){
//     // h is higher order function
//     // fn is call back
//     console.log(x*x);
//     fn();
// }

// h(10,function(){
//     console.log("done with call back")
// })

// // second method
// console.log("Second method");

// function h(x,fn){
//     // h is higher order function
//     // fn is call back
//     console.log(x*x);
//     fn(x*x);
// }
// h(10,exec);


// function exec(n){
//     console.log("Squared value is ",n);
// }
////Asynchronous piece of code////
console.log("Start");
setTimeout(function(){
    console.log("Timer done");
},300);

console.log("end");
// event loop and call back cube
