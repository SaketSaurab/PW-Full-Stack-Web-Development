// linear serach in array
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function linearSerarch(input, element) {
  let a = parseInt(element);
  let arr = input.trim().split(/\s+/).map(Number);



  if(arr.some(isNaN)|| isNaN(a)){
    console.log("Enter valid number");
    rl.close();
    return;
  }

  console.log(`input array : ${arr}`);
  let found=false;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===a){
      console.log(`The is element is present at ${i} index`);
      found=true;
      break;
    }
  }
  if(!found){
    console.log("The element is not found");
  }
  rl.close();
}

rl.question("Enter the array element ", (input) => {
  rl.question("Enter the element to serach : ", (input2) => {
    linearSerarch(input, input2);
  });
});
