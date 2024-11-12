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


//arrow function
//12/11/2024