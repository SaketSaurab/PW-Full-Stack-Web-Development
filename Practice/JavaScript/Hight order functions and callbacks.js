//high order functions and callbacks

// function which accept another function is called high order function
//function which is used inside the function is called callback
function h(x,fn){
    //h-> is higher order function
    //fn-> is call back function
    console.log(x*x);
    fn();
}
h(10,function(){
    console.log("done with call back");
})

console.log("timer function");

console.log("Start");
setTimeout(function f(){
    console.log("timer done");
},3000);
console.log("end");




