//DOM 2
// let div=document.querySelector("div");
// console.log(div);
// let id =div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));



///style:
//accessing styling of div 
// let div=document.querySelector("div");
// div.style.backgroundColor="yellow";
// div.style.fontSize="28px";
// div.innerText="Hello inner text ";

//insert element
//let el=document.createElement("div");
// let newBtn=document.createElement("button js");
// newBtn.innerText="click me";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>hi   am new</i>";
document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
para.remove();

newHeading.remove();