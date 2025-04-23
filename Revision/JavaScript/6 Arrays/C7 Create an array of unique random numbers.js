// Create an array of unique random numbers
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomArr(size, min, max) {
    let set=new Set();
    while(set.size<size){
        let num=Math.floor(Math.random()*(max-min+1))+min;
        set.add(num);
    }
    let arr=Array.from(set);
    console.log("Original Array : ",arr);
    console.log("Ascending order: ",[...arr].sort((a,b)=>a-b));
    console.log("Descending order : ", [...arr].sort((a,b)=>b-a));
}

rl.question("Enter the size of the array : ", (input1) => {
  rl.question("Enter the minimum number ", (input2) => {
    rl.question("Enter the maximum number ", (input3) => {
      let size = Number(input1);
      let min = Number(input2);
      let max = Number(input3);
      if (isNaN(size) || isNaN(min) || isNaN(max)) {
        console.log("Enter valid input");
      } else {
        randomArr(size, min, max);
        rl.close();
      }
    });
  });
});
