// Anonymous functions
let x =function(){      // anonymous function declaration
    // debugging of anonymous function is very hard
    console.log("hello");
}
x();

// Immediately invoke functions
( function exec(){            // 
    console.log("Named");
}
)();

//
(function(x){
    console.log(x*x);
})(5);