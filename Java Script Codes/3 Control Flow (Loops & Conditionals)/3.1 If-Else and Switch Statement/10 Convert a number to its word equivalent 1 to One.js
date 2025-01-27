// Convert a number to its word equivalent (1 → "One").

const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const units=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
const teens=["Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
const tens=["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
const scale=["","Hundred","Thousand","Lakh","Crore"];

function numberToWords(num){
    if(num===0){
        return "Zero";
    }
    if(num<0){
        return "Minus "+numberToWords(Math.abs(num));
    }
    return  convertToWords(num).trim();
}

function convertToWords(num){
    let result="";
    if(num>=10000000){
        result+=convertToWords(Math.floor(num/10000000))+" Crore ";
        num%=10000000;
    }
    if(num>=100000){
        result+=convertToWords(Math.floor(num/100000))+" Lack ";
        num%=100000;
    }
    if(num>=1000){
        result+=convertToWords(Math.floor(num/1000))+" Thousand ";
        num%=1000;
    }
    if(num>100){
        result+=convertToWords(Math.floor(num/100))+" Hundred ";
        num%=100;
    }
    if(num>10 && num<20){
        result+=teens[num-11]+" ";
        return result;
    }
    if(num>=10){
        result+=tens[Math.floor(num/10)]+" ";
        num%=10;
    }
    if(num>0){
        result+=units[num]+" ";
    }
    return result;

}

rl.question("Enter the number : ",(input)=>{
const num=Number(input.trim());
if( !isNaN(num)){
    console.log(`${num} = ${numberToWords(num)}`);
}
else{
    console.log("Enter the valid number");
}
})