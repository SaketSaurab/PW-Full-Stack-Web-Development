
let btn=document.querySelector("button");
let allInput=document.querySelectorAll(".input");
btn.addEventListener("click",()=>{

    let value1=Number(allInput[0].value);
    let value2=Number(allInput[1].value);

    let outPut1=value1+value2;

    allInput[2].value=outPut1;


});




