//Classes and objects

//creating object
const student={
    name:"khapra",
    marks:91,
    printMarks:function(){
        console.log("Marks=",marks);
    },
};
console.log(student);

const emplyee={
    calculateTax(){
        console.log("tax rate is 10%");
    },
};
const karanArjun={
    salary:50000
};
// to use prototype we use __proto__
karanArjun.__proto__=emplyee;
