/* 
Que.2:Write a program that grades a student based on marks.
If >90 : A
If 70< and >90 : B
If 50< and >70 : C
If below 50 : F

*/
let marks=82;
if(marks>90){
    console.log("A");
}
else if(marks>70 && marks<=90){
    console.log("B");
}
else if(marks>50 && marks<=70){
    console.log("C");
}
else if(marks<=50 && marks>=0){
    console.log("F");
}
else{
    console.log("Enter valid marks");
}