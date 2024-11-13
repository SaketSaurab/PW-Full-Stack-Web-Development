//oops 1
//classes: are  blueprint
/*
    class NameOfTheClass {
    // you can add details like  member functions and data members
    }
*/
class Product{
//defining data memebers in javascript
name;
price;
categeory;
description;
rating;
// if we use this method then we can not use validation to the object
//     addToCart(){
//         console.log("added to the cart");
//     }
//     removeFromCart(){
//         console.log("removed from the cart");
//     }
    
// }
constructor (builder){
    this.name=builder.name;
    if(builder.price>0)
        this.price=builder.price;
    this.description=builder.description;

}

// get Builder(){}
// get name(){}
// get price(){}

//write a product class

//Constructor: very special member function of every class

//every time we called new it follwed 4 process:  1.create empty and absolute empty object
//                                                 2.it creates new constructors
//                                                  3.new triggers everything to done for prototypes to work
//                                                  4.if nothing is returned from the constructors then we will return this keyword

//this keyword in js is very different than any other language
