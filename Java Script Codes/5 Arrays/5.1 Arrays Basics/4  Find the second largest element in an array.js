//  Find the second largest element in an array.
//    45 12 85 96 34 2 15 44 13 45 23

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function secondBig(input) {
  let arr = [];
  for (let num of input) {
    arr.push(num);
  }
  let big1 = -Infinity;
  let big2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>big1){
        big2=big1;
        big1=arr[i]
    }
    else if(arr[i]>big2 && arr[i]<big1){
        big2=arr[i];
    }
  }
  console.log(`The second biggest number is ${big2}`);
}
rl.question(
  "Enter the array element by seprating through space : ",
  (input) => {
    let arr = input.trim().split(" ").map(Number);
    if (arr.every((num) => !isNaN(num))) {
      secondBig(arr);
    } else {
      console.log("Enter valid array elements ");
    }
    rl.close();
  }
);
