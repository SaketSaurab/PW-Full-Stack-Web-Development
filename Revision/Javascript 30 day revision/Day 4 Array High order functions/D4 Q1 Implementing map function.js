/// Implement your own `map()` function.

let number=[3,6,34,84,26,97,87,98];
let double=number.map(num=>num*2);

console.log(double);



// student object
console.log('Object based map method');
let students = [
  { name: "Amit", marks: 65 },
  { name: "Neha", marks: 82 },
  { name: "Rahul", marks: 45 },
  { name: "Priya", marks: 90 },
  { name: "Karan", marks: 55 }
];
console.log("Before status");
console.log(students);

let result=students.map(stu =>({
  ...stu,
  status:stu.marks>50  ?"pass":"fail"
}));
console.log("after status");
console.log(result);

let topper=result.map(top=>({
  ...top,
  ...(top.marks>=79 &&{ you_are:"Topper "})
}));
console.log(topper);
