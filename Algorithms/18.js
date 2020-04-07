/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len=nums.length;
    if(len<4){
        return [];
    }
    nums=nums.sort((a,b) => {
        return a-b;
    })
    let rtn=[];
    for(let i=0;i<len-2;i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let tempTarget=target-nums[i];
        for(let j=i+1;j<len-1;j++){
            if (j > i+1 && nums[j] === nums[j-1]) continue;
            let left=j+1,right=len-1;
            while(left<right){
                let tempSum=nums[left]+nums[j]+nums[right];
                if(tempSum === tempTarget){
                    rtn.push([nums[i],nums[left],nums[j],nums[right]]);
                    while(left<right && nums[left]===nums[left+1]) left++;
                    while(left<right && nums[right]===nums[right-1]) right--;
                    left++;
                    right--;
                }else if(tempSum<tempTarget){
                    left++;
                }else{
                    right--;
                }

            }
        }
        
    }
    return rtn;
};