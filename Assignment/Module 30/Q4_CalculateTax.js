function createTaxCalculator(){
    const taxBrackets=[
        {threshold:200000,rate:0.1},
        {threshold:500000,rate:0.2},
        {threshold:1000000,rate:0.3},
        {threshold:1500000,rate:0.4},
        {threshold:Infinity,rate:0.5}
    ];
    return function calculateTax(income){
        let tax=0;
        let previousThreshold=0;
        for(let i=0;i<taxBrackets.length;i++){
            const{ threshold,rate}=taxBrackets[i];
            if(income>threshold){
                tax+=(threshold-previousThreshold)*rate;
                previousThreshold=threshold;
            }
            else{
                tax+=(income-previousThreshold)*rate;
                break;
            }
        }
        return tax;
    };
}
const calculateTax=createTaxCalculator();
console.log(calculateTax(100000));
console.log(calculateTax(450000));
console.log(calculateTax(1600000));
console.log(calculateTax(3500000));