// Implement a function that sorts an array of objects by property.
const people = [
  {
    name: "Ram",
    age: 35,
  },
  {
    name: "Shyam",
    age: 25,
  },
  {
    name: "Bharat",
    age: 34,
  },
];


function sortByProperty(arr,property){
    return arr.sort((a,b)=>{
        if(a[property]<b[property]) return -1;
        if(a[property]>b[property]) return 1;
        return 0;
    });
}

console.log(sortByProperty(people,"age"));