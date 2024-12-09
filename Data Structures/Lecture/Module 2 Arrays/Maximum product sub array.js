// Maximum product sub array

//1. Brute force method
// function maxProduct(nums){
//     let maxProduct=nums[0];
//     for(let i=0;i<nums.length;i++){
//         let product=1;
//         for(j=i;j<nums.length;j++){
//             product=product*nums[j];
//             maxProduct=Math.max(maxProduct,product);
//         }
//     }
//     return maxProduct;
// }

// 2. two pointer approach
function maxProduct(nums){
    let maxProduct=nums[0];
    let minProduct=nums[0];
    let result=nums[0];
    for(i=1;i<nums.length;i++){
        let num=nums[i];
        if(num<0){
            [maxProduct,minProduct]=[minProduct,maxProduct];
        }
        maxProduct=Math.max(num,num*maxProduct);
        minProduct=Math.min(num,num*minProduct);
        result=Math.max(result,maxProduct);
    }
    return result;
}


const nums=[2,3,-2,4];
console.log(maxProduct(nums));

