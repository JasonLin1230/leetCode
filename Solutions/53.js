/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0;
    let max = -Number.MAX_VALUE;
    let len = nums.length;
    for(let i=0;i<len;i++){
        pre = Math.max(pre+nums[i],nums[i]);
        max = Math.max(max,pre);
    }
    return max;
};