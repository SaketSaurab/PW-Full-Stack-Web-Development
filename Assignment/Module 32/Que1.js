/**
 * Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person. 
Ans.

 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
    };
}

// Example usage
let person1 = new Person('Sandeep', 28);
person1.sayHello(); // Outputs: Hello, I'm Sandeep, and I'm 28 years old.

let person2 = new Person('Anita', 35);
person2.sayHello(); // Outputs: Hello, I'm Anita, and I'm 35 years old.
