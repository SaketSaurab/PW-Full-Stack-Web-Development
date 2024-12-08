// move all the zeros at the end

// method 1
// function moveZeros(nums){
//     const nonZerosElements=nums.filter((num)=>num !=0);
//     const zeroCount=nums.length-nonZerosElements.length;
//     return [...nonZerosElements,...Array(zeroCount).fill(0)];
// }
// const nums=[3,5,0,5,0,0,2,3];
// console.log(moveZeros(nums));

//method 2
function moveZeros(nums){
    let lastNonZerosFound=0;
    for(cur=0;cur<nums.length;cur++){
        if(nums[cur]!=0){
            [nums[lastNonZerosFound],nums[cur]]=[nums[cur],nums[lastNonZerosFound]];
            lastNonZerosFound++;
        }
    }
    return nums;
}

const nums=[3,5,0,5,0,0,2,3];
console.log("original array",nums);
console.log(moveZeros(nums));
