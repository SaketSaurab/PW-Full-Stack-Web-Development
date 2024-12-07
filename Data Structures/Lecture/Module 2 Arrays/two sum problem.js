// two sum problem

function twoSum(nums,target){
    for( i=0; i<nums.length;i++){
        for( j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return[i,j];
            }
        }
    }
}

nums=[9,1,5,4,7];
target=12;
console.log(twoSum(nums,target));

//method 2: two pointer approach
console.log("Two pointer method");
function TwoSum (Nums,Target){
    // store initial indexes
    Nums=Nums.map((num,index)=>({ num,index }));
    Nums.sort((a,b)=>a.num-b.num);
    let left=0;
    let right=Nums.length-1;
    while(left<right){
        const sum=Nums[left].num+Nums[right].num;
        if(sum==target){
            return [Nums[left].index,Nums[right].index];
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }  
}
nums2=[9,1,5,4,7];
target2=6;
console.log(TwoSum(nums2,target2));

// 7 december check
// 
// sorting 
