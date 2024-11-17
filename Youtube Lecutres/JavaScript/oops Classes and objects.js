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

// Classes in JS
class ToyotaCar{
    start(){
        console.log("Car start");
    }
    stop(){
        console.loc("car stope");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}
let fortuner=new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus=new ToyotaCar();

//constructor

//inheritance in JS
class parents{

    hello(){
        console.log("Hello");
    }
}
class Child extends parents{

}
let obj1=new Child();

obj1.hello();

//
class Person{
    constructor(){
        console.log("enter parent constructor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("Enter child constructor");
        super();// to invoke super class constructor
        this.branch=branch;
    }
    work(){
        console.log("work as engineer ");
    }
    constructor(){
    console.log("Exit child constructor");
    }
}

let shradhaObj=new Engineer();


//Super keyword
