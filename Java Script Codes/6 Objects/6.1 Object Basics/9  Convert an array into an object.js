//  Convert an array into an object.

// method 1 using indexes as Keys

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// method 1 using spread operator (...)

function keyObj(input) {
  const obj = { ...input };
  console.log("Method 1 using indexes as keys : ");
  console.log(obj);
}

// method 2 using mapping arrays to custom keys
function mapArr(keys, values) {
  console.log(
    "Method 2 using Object.fromEntries(key.map((key,index)=>[key,values[index]]))"
  );

  const obj = Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
  );
  console.log(obj);
}

// method 3 using reduce() for dynamic object conversion
function reduceArr(keys, arr) {
  const obj = arr.reduce((acc, value, index) => {
    acc[keys[index]] = value;
    return acc;
  }, {});
  console.log("Method 3 using reduce method");
  console.log(obj);
}

rl.question("Enter the object keys: ", (input1) => {
  rl.question("Enter the object values: ", (input2) => {
    let keyArr = input1.trim().split(" ");
    let valueArr = input2.trim().split(" ");
    // method 1 using indexes as keys
    keyObj(keyArr);

    // method 2 using indexs values
    mapArr(keyArr, valueArr);
    // method 3 using index keys and values

    reduceArr(keyArr, valueArr);
    rl.close();
  });
});
