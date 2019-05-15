/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Your runtime beats 98.45 % of javascript submissions.
var canJump = function(nums) {
    let len = nums.length;
    let left = 0, right = 0;
    while(left < len){
        let max = 0;
        for(let j=left;j<=right;j++){
            max = Math.max(max,nums[j]+j);
        }
        if(max == right && right < len-1){
            return false;
        }
        left = right+1;
        right = max;
        if(right>=len-1){
            return true;
        }
    }
};