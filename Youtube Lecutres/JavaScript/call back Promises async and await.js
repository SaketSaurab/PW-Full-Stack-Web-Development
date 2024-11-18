//call back promises async and await

// console.log("one");
// console.log("two");
// console.log("three");

//------------------------------------------------------------------------//

// settimeout set the time after how much time we want to execute the code and time is given in mili second
/*
console.log("Instant hello");
function hello(){
    console.log("Hello after few second");
}
setTimeout(hello,2000);

//another method do the same task
setTimeout(()=>{
    console.log("second Hellllloooo");
},4000);
*/
//------------------------------------------------------------------------//
// call back
/*
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(12,42,sum);
*/


//------------------------------------------------------------------------//
/*
//call back hell
function getData(dataId,getNextData){
    setTimeout(()=>{
        
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    },2000)
}
getData(1,()=>{
    console.log("getting data 2");
    getData(2,()=>{
        console.log("getting data 3");
        getData(3);
    });
});
// this is neste call back -> call back hell

*/
//------------------------------------------------------------------------//
//Promises: have three states pending resolve rejected
//let promise new Promise((resoleve,reject)=>{..........})   //function with two handler

// let promise =new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve(123);
//     //reject("some error occured 11");

// })

/*
const getPromise=()=>{
   return new Promise((resolve,reject)=>{
        console.log("I am promise");
        resolve("Success 2");
        // error("some error 2");
    });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("Promise fullfilled",res);
});

promise.catch((err)=>{
    console.log("some errors comming 2",err);
});

//promises:  .then() & .catch()
    //promise.then((res)=>{.......})
    //promise.catch((err)=>{ ...})
*/

//------------------------------------------------------------------------//

//------------------------------------------------------------------------//

//------------------------------------------------------------------------//

//------------------------------------------------------------------------//




