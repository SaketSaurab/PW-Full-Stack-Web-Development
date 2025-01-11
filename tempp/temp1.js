// let Product=[
//     {
//         name:"Keyboard",
//         price:1299,
//         stock:true,
//     },
//     {
//         name:"Mouse",
//         price:299,
//         stock:true,
//     },
//     {
//         name:"AUX cable",
//         price:"129.54356",
//         stock:false,
//     },
//     {
//         name:"USB Hub",
//         price:199.987654,
//         stock:true,
//     },
//     {
//         name:"Mice",
//         price:"121.76543",
//         stock:false,
//     }
// ];
// // function ProductList(Product){
// //     Product.forEach((Product)=>{
// //         console.log(`Product name: ${Product.name}`);
// //         console.log(`Product price:${Product.price}`);
// //         console.log(`stock available ${Product.stock?"yes":"no"} \n`);

// //     });
// // }
// // ProductList(Product);

// function TotalPrice(cart){
//     let total=0;
//     cart.forEach((Product)=>{
//         total+=Number(Product.price);
//     });
//     return total.toFixed(5);
// }
// // let total=2.344;
// // let cartValue=TotalPrice(Product);
// // console.log(cartValue);
// // console.log(typeof(TotalPrice));
// // console.log(typeof(Product));
// // console.log(typeof(total));

// // let discount=[2,5,10,15,20,30,50,70,90];
// // discount.unshift(22);
// // console.log(discount);
// // for(const pro of Product){
// //     console.log(pro.name,pro.price);
// // }
// // let newProduct=Product.map((Pro)=>Pro.price);
// // console.log(newProduct);

// const student={
//     name:"acer",
//     city:"pune",
//     price:39000,
//     printMarks:function(){
//         console.log(price);
//     },
// };
// const employee={
//     calculateTax(){
//         console.log("The tax rate is 10%");
//     },
// };
// const karan1={
//     salary:25000,
// };
// const karan2={
//     salary:20000,
//     calculateTax(){
//         console.log("internal tax 20%");
//     },
// };
// const karan3={
//     salary:5000,
// };
// const karan4={
//     salary:28000,
// };
// const karan5={
//     salary:34000,
// };
// karan1.__proto__=employee;
// karan2.__proto__=employee;

// class ToyotaCar{
//     constructor (brand){
//         console.log("creating constructor");
//         this.newBrand=brand;
//     }
   
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner=new ToyotaCar("brand honda");
// let lexus=new ToyotaCar("Hello world");

// class parents{
//     hello(){
//         console.log("parents hello inherit");
//     }
// }

// class child extends parents{};
// let obj=new child();

// class person{
//     eat(){
//         console.log("eat");
//     }
//     drink(){
//         console.log("drink water");

//     }
// }
// class engineer extends person{
//     code(){
//         console.log("do coding");
//     }
//     laptop(){
//         console.log("Having laptop");
//     }
// }

// let hello2=new engineer();
// console.log("first random txt");
// console.log("second random txt");
// setTimeout(()=>{
//     console.log("this is hello set time out sample text");
// },2000);
// console.log("third random txt");
// function sum(a,b){
//     console.log(a=+b);
// }
// function calculator(a,b,callBackSum){
//     callBackSum(a,b);
// }
// calculator(3,8,sum);

const Products=[
    {name:"wireless mouse",price:522.5, inStock:true,},
    {name:"Keyboard",price:799.5,inStock:true,},
    {name:"data cable",price:129.9,inStock:true,},
    {name:"aux cable",price:249,inStock:false,}
    ];
// const ProductNames=Products.map((product)=>product.name);
// console.log(ProductNames);

// console.log("Price");
// const ProductPrice=Products.map((product)=>product.price);
// console.log(ProductPrice);

// console.log("Increased price");
// const UpdatePrice=Products.map((product)=>product.price+10);
// console.log(UpdatePrice);

// const filterPrice=Products.filter((product)=>product.price>250);
// console.log(filterPrice);
// //resucing array 
// const totalAmount=Products.reduce((total,Products)=>total+Products.price,0);
// console.log(totalAmount.toFixed(2));
// let tempSort=Products.slice().sort((a,b)=>a.price-b.price);
// console.log(tempSort);

// let arr34=[3,6,2,76,43,12,76,43,0,-5,-54 ,65];
// let SortedArr=arr34.sort((a,b)=>a-b);
// console.log("original arr:",arr34);
// console.log("sorted arr",SortedArr);

// const profit=["ssd","naman","hello","bye"];
// const[fist,second,third,fourth]=profit;
// console.log(second);

// const flatArr1=[2,[35,6],3,[5,6,7,[8,75,4,[6,7],87,[8]]]];
// const flat1=flatArr1.flat(Infinity).sort((a,b)=>a-b);
// console.log(flat1);

// const arr2=[2,3,5,4,6,4,5,2,7];
// const uniqueArr=arr2.filter((item,index)=>arr2.indexOf(item)==index);
// console.log(uniqueArr);
// const unique2=[...new Set(arr2)];
// console.log(unique2);

// function twoSum(a,b){
//     for(i=0;i<a.length;i++){
//         for(j=i+1;j<a.length;j++){
//             if(a[i]+a[j]==b){
//                 return [i,j];
//             }
//         }
//     }
// }
// let aa=[2,3,6,8,1,9,13,54,23,16];
// let bb=55;
// console.log(twoSum(aa,bb));


// function twoSum1(nums,target){
//     nums=nums.map((num,index)=>({num,index}));
//     nums.sort((a,b)=>a.num-b.num);

//     let left=0;
//     let right=nums.length-1;

//     while(left<right){
//         const sum=nums[left].num+nums[right].num;
//         if(sum===target){
//             return [nums[left].index,nums[right].index];
//         }
//         else if(sum<target){
//             left++;
//         }
//         else {      
//             right--;
//         }
//     }
// }



// let aa=[2,3,6,8,1,9,13,54,23,16];
// let bb=55;
// console.log(twoSum1(aa,bb));


// let num=(prompt("enter a number"));
// console.log(num,typeof(num));

// let ar1=[2,5,8,1,9];
// console.log(ar1);
// ar1.push(22);
// console.log(ar1);

// let ar2=ar1;
// ar2.push(33);
// console.log("ar1",ar1);
// console.log("ar2",ar2);

// function displayName(){
//     console.log("welcome to ws cube tech ");
// }
// displayName();
// displayName();
// function sum(num1,num2){
//     console.log(num1+num2);
// }

// sum(33,55);

// let ar21=()=>{
//     console.log("Hello Arrow function");
// }
// let one=(res)=>{
//     return res;
// }

// let sum=(n,m,result)=>{
//     return result(n+m);
// }

// let output=sum(3,6,one);
// console.log(output);
// let r1=[3,35,74,84,55,23,84,56,98,768,35,68756];
// r1.forEach((i,j)=>{
//     console.log(j," ",i);
// })


// let r1=[3,35,74,84,55,23,84,56,98,768,35,68756];
// let r2=r1.map((i,j)=>{
//     return i+5;
// })
// console.log(r1);
// console.log("r2",r2);
// let r3=r1.filter(i=>i%2==0);
// console.log("r3",r3);

// let sum=r1.reduce((total,i)=>total+i,0);
// console.log("sum",sum);


// let aH1=document.getElementById('heading');
// console.log("inner text:",aH1.innerText);
// console.log("inner html:",aH1.innerHTML);
// let para=document.getElementById('input');
// console.log("para:",para.innerText);
// para.innerText=aH1.innerText;
// console.log(para.innerText);

let password=document.getElementById('pass');
let btn=document.getElementById('btn');

function showHidePassword(){
if(btn.innerText=="Show"){
    password.type="text";
    btn.innerText="Hide"
}
else{
    password.type="Password";
    btn.innerText="Show";
}
}