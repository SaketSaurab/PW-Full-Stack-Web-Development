//Ananymous Function : Something that dont have name or identity
let x=function(){
    console.log("hi");
}
x();

//immediately invoke function
(function exec(){
    console.log("Hello")
})();

//2nd example
(function (x){
    console.log(x*x);
})(5);