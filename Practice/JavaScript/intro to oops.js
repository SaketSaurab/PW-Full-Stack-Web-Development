//introduction to oops
//object creation using key value pairs
let obj={
    id:101,name:"sanket",salary:1000
};
console.log(obj);

//creating obje using new
let emp=new Object();
console.log(emp);
emp.id=102;
emp.name="singh";
emp.salary=12000;
console.log(emp);

//object construction using function
//i:id, n:name,s:salary
function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e=new Emp(103,"ammy",15000);
console.log(e);

console.log(emp.id);

console.log(emp['name']);