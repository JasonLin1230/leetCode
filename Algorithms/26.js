/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.3 MB, less than 41.41% of JavaScript online submissions for Remove Duplicates from Sorted Array.
var removeDuplicates = function(nums) {
    let len=0,temp=nums[0],index=1;
    let l=nums.length;
    if(l<2){
        return nums;
    }
    for(let i=1;i<l;i++){
        if(nums[i]===temp){
            continue;
        }else{
            nums[index]=nums[i];
            temp=nums[i];
            index++;
        }
    }
    return index;
};