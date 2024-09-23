function factorial(n){
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log("Factoriaql of 3 is :",factorial(3));
console.log("Factorial of 0 is :",factorial(0));
console.log("Factorial of 10 is : ",factorial(10));
