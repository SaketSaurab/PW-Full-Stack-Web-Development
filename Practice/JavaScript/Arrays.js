//Introduction to array
const language=["javascript","php","java","c"]
const len=language.length;
for(let i=0;i<len;i++){
    console.log(language[i]);
}

let numbers=[1,2,3,5,6,7,4,3,5,67,8,45,34,5,45,3,3,63,6,34,3,4,37,57];
for(let j=0;j<numbers.length;j++){
    console.log(numbers[j]);
}

//let emptyArray=new Array(5);
console.log("before \n");
const hobbies=["playing","listening music","watching movies"];
for(let i=0;i<hobbies.length;i++){
    console.log(hobbies[i]);
}
console.log("after \n");
hobbies[1]="football";
for(let i=0;i<hobbies.length;i++){
    console.log(hobbies[i]);
}

delete hobbies[1];
console.log("after delete");
for(let i=0;i<hobbies.length;i++){
    console.log(hobbies[i]);
}