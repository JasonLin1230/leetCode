/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 68 ms, faster than 85.12% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 36.1 MB, less than 52.26% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
var removeDuplicates = function(nums) {
    let len = nums.length, count = 1, index = 1;
    for(let i=1; i<len; i++){
        if(nums[i] == nums[i-1]){
            if(count == 2){
                continue;
            }else{
                count++;
            }
        }else{
            count = 1;
        }
        nums[index] = nums[i];
        index++;
    }
    return index;
};