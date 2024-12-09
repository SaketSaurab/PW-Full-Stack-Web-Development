//Minimum increment for unique array

function minIncrement(nums){
    nums.sort((a,b)=>a-b);
    let moves=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<=nums[i-1]){
            const increment=nums[i-1]+1-nums[i]; 
            nums[i]=nums[i-1]+1;
            moves+=increment;
        }
    }
    return moves;
}

const nums=[3,2,1,2,1,7];
console.log(minIncrement(nums));