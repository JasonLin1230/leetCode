/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// Runtime: 52 ms, faster than 96.98% of JavaScript online submissions for Search in Rotated Sorted Array II.
// Memory Usage: 34.1 MB, less than 59.81% of JavaScript online submissions for Search in Rotated Sorted Array II.
var search = function(nums, target) {
    let left = 0, right = nums.length-1, mid = 0;
    while(left <= right){
        mid = parseInt((left+right)/2);
        let midItem = nums[mid];
        if(midItem == target){
            return true;
        }
        if(midItem > nums[left]){
            if(target > midItem || target < nums[left]){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }else if(midItem < nums[left]){
            if(target < midItem || target > nums[right]){
                right = mid-1;
            }else{
                left = mid+1;
            }
        }else{
            left++;
        }
    }
    return false;
};