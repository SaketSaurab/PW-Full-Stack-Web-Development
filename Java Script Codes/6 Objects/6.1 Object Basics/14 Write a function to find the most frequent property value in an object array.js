// Write a function to find the most frequent property value in an object array.
const people = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "Los Angeles" },
    { name: "Charlie", city: "New York" },
    { name: "David", city: "Chicago" },
    { name: "Eve", city: "New York" }
];

function mostFrequent(arr,property){
    const frequecyMap={};
    arr.forEach(obj=>{
        if(obj[property]){
            frequecyMap[obj[property]]=(frequecyMap[obj[property]]|| 0)+1;
        }
    });
    let morstFreq=null;
    let max=0;
    for(let key in frequecyMap){
if(frequecyMap[key]>max){
    max=frequecyMap[key];
    mostFrequent=key;
}
    }
    console.log("Most frequent: ",mostFrequent);
}
mostFrequent(people,"city");