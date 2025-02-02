// arrays
let heros=["iron man","hulk","captain america","deadpood"];
console.log("super herors names:",heros);
let marks=[34,63,73,86,45,32,13,67,98];
console.log("marks",marks);
console.log("length:",marks.length);

// array indices
console.log("marks[2]:",marks[2]);

/// looping over an array
console.log("looping over an array");
for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}

//for of loop
console.log("for of loop:");
for(let item of heros){
    console.log(item);
}

// practice question
console.log("practice question 1: average of marks");
let marks2=[85,97,44,37,76,60];
let total=0;
let average;
for(let sum of marks2){
    total+=sum;
}
average=total/marks2.length;
console.log("average of marks is:",average);

console.log("Practice question 2: array after applying 10% off");
let itemList=[250,645,300,900,50];
console.log("original list:",itemList);
let updatedList=[];
for(let i=0;i<itemList.length;i++){
    let offer=itemList[i]/10;
    itemList[i]=itemList[i]-offer;
    console.log(`value after offer:${itemList[i]}`);
}

