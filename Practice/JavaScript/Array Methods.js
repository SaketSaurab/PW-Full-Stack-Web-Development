//Array Methods
let fruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
// // 1 . Slice; array.slice(start,end);
// let extractedFruit=fruit.slice(2,5);
// console.log("array.slice(2,5): ",extractedFruit);

// 2 splice: array.splice(start,deleteCount,item1,item2);
console.log("88888888888888888888888");
console.log("Splice ");
let splice2=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
splice2.splice(2,0,'temp1','temp2','temp3');
console.log("splice(2,0,temp1,temp2,temp3: ",splice2);
// let fruit2=fruit;
// let spliceFruit=fruit2.splice(2,2,5,6);
// console.log("spliceFruit(2,2,5,6):",spliceFruit);

// 3 push: let addData=array.push('itemName');
let pushFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let pushFruit2=pushFruit.push('chapati','puri');
console.log(pushFruit2);
console.log(pushFruit);

// pop 
let popFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let popLength=popFruit.pop();
console.log("PopFruit list",popFruit);
console.log("PopFruit removed : ",popLength);

//shift :remove the first element and return the first element
let shiftFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let shiftLength=shiftFruit.shift();
console.log("ShiftFruit list: ",shiftFruit);
console.log("shift removed element: ",shiftLength);

// unshift:add one or more element to the begining
let unshiftFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let unshiftLenght=unshiftFruit.unshift("kaju","badam");
console.log("unshift fruit list",unshiftFruit);
console.log("unshift length: ",unshiftLenght);

//reverse:reverse the order
let reverseFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
reverseFruit.reverse();
console.log("reverse fruit order :",reverseFruit);

//join:join the list in string
let joinFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let joinList=joinFruit.join();
console.log("join: ",joinList);

//tostring

let toStringFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let toStringResult=toStringFruit.toString();
console.log("toString result : ",toStringResult);

//delete
let deleteFruit=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
delete deleteFruit[2];
console.log("delete(2): ",deleteFruit);

//concat
let concat1=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
let concat2=[2,35,623,7345,734,24];
let concat3=concat1.concat(concat2);
console.log("concat3: ",concat3);

//sort
let sort1=['apple_0','banana_1','cherry_2','orange_3','mango_4','lichi_5','pineapple_6'];
sort1.sort();
console.log("sort :",sort1);

//sorting by array string property

const arrayObject1=[
    {name:"john",age:25},
    {name:"prateek",age:34},
    {name:"bob",age:82}
]
arrayObject1.sort((a,b)=>{
    
const nameA=a.name.toUpperCase();
const nameB=b.name.toUpperCase();
    if(nameA < nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
    if(nameA==nameB){
        return 0;
    }
});
console.log(arrayObject1);

//sorting by a  number type property
const arrayObject2=[
    {name:"john",age:25},
    {name:"prateek",age:34},
    {name:"bob",age:82}
]
arrayObject2.sort((a,b)=>a.age-b.age);
console.log("arrayObject2: ",arrayObject2);

//forEach
//forEach(callbackFn,thisArg);
const numbers4=[23,35,21,63,72,47,95,34,85,86,43,245,785,456,768];
const oddNumber=[];
const evenNumber=[];
numbers4.forEach(function(currentValue,index){
    if(currentValue%2==0){
        evenNumber.push(currentValue)
        return;
    }
    else{
        oddNumber.push(currentValue)
        return;
    }
});
console.log("even number : ",evenNumber);
console.log("odd number :",oddNumber);

//filter

//reduce

//reduceRight

//every

//indexOf

//lastIndexOf : 

//find : 

//findIndex : 

//inclueds