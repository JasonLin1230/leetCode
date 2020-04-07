/**
 * @param {number[]} nums
 * @return {number}
 */
// Your runtime beats 69.30 % of javascript submissions.
var firstMissingPositive = function(nums) {
    nums.sort((a,b) =>{
        return a-b;
    })
    let index=1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<1){
            continue;
        }
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        if(nums[i]!==index){
            return index;
        }else{
            index++;
        }
    }
    return index;
};