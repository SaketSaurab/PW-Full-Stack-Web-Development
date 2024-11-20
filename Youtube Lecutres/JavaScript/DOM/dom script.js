// DOM in JavaScript

// console.log("Hello JS");
// console.dir(window.document);

//Dom manupulation
//selecting with id : document.getElementById("myId");
// let heading=document.getElementById("heading");
// console.dir(heading);

//selecting with class : document.getElementsByClassName("myClass");
// let headings=document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

//selecting with tag: document.getElementsByTagName("p");
// let para=document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);


// Query Selector: document.querySelector("myId/myClass/myTag");
        //returns first elements

//   document.querySelectorAll(#myId/.myClass/myTag);
//      returns a nodelist


let FirstElements=document.querySelector("p");
console.dir(FirstElements);


let allElements=document.querySelectorAll("p");
console.dir(allElements);

