// binary search
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binarySearch(input, element) {
  let arr = input.trim().split(/\s+/).map(Number);
  let e = parseInt(element);
  if (arr.some(isNaN) || isNaN(e)) {
    console.log("Please enter valid input");
    rl.close();
    return;
  }
  console.log("Input array : ", arr);
//   arr=arr.sort((a,b)=>a-b);                  // sorting method
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === e) {
      console.log(`${e} is found at index ${mid}`);
      rl.close();
      return;
    } else if (arr[mid] < e) {
      first = mid + 1;
    } else if (arr[mid] > e) {
      last = mid - 1;
    }
  }
  console.log(`${e}  is not present in the given array    `);
  rl.close();
}

rl.question("Enter array element in sorted order: ", (input1) => {
  rl.question("Enter the element to search : ", (input2) => {
    binarySearch(input1, input2);
  });
});
