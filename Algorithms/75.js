/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Runtime: 48 ms, faster than 98.91% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.8 MB, less than 78.99% of JavaScript online submissions for Sort Colors.
var sortColors = function(nums) {
    let i = -1, j = -1, len = nums.length;
    for(let p = 0; p < len; p++) {
       let v = nums[p];
       nums[p] = 2;
       if (v == 0) {
          nums[++j] = 1;
          nums[++i] = 0;
       }
       else if (v == 1) {
           nums[++j] = 1;
       }
    }
};