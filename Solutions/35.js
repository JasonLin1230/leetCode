/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 33.8 MB, less than 54.50% of JavaScript online submissions for Search Insert Position.
var searchInsert = function(nums, target) {
    let mid,left=0,right=nums.length-1;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    if(nums[mid]<target){
        return mid+1;
    }else{
        return mid;
    }
};