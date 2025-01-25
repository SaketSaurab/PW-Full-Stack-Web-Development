// Convert marks into grades using if-else.

const readline=require('readline');

function grade(a){
    if(a>90 && a<=100 ){
        console.log("Grade A");
    }
    else if(a>80 && a<=90){
        console.log("Grade B");
    }
    else if(a>70 && a<=80){
        console.log("Grade C");
    }
    else if(a>60 && a<=70){
        console.log("Grade D");
    }
    else if(a>50 && a<=60){
        console.log("Grade E");
    }
    else if(a>=0 && a<=50){
        console.log("Grade F");
    }

}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter marks to check the marks ",(num)=>{
    if(!isNaN(num) && num>=0 &&num<=100){        
    grade(parseInt(num));
    }
    else{
        console.log("Enter the correct marks");
    }
    rl.close();
});