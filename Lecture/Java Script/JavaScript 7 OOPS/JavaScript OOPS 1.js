// Object Oriented programming
// Classes are the blueprint
//objects :using classes the final entity that we will develop is called as objects
//

// Lets write a product class
class Product{
    name;
    price;
    category;
    description;
    rating;
    constructor(productName,productPrice,procuctCategory,procutDescription,productRating){
        this.name=productName;
        this.price=productPrice;
        this.category=procuctCategory;
        this.description=procutDescription;
        this.rating=productRating;
        //this refers to call site
        // call site can be object ,new position , or keyword
    }
    addToCart(){
        console.log("Product added to the cart ");
    }
    removeFromCart(){
        console.log("Product removed from cart");
    }
    displayProduct(){
        console.log("Product displayed");
    }
    buyProduct(){
        console.log("Product bought");
    }
}
/*  
    Objects: Using classes the final entity that we develop is called as objects.
 */

    //Constructor
    class Product2{
        constructor(){
            // this is custom constructor
        }
    }
    // let constructor=10;  we can use constructor like this 
    // console.log("let ",constructor);
    let iphone=new Product();
    console.log(iphone);

//Constructor
