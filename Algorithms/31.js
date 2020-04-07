/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Next Permutation.
// Memory Usage: 34.8 MB, less than 72.92% of JavaScript online submissions for Next Permutation.
var nextPermutation = function(nums) {
    let len=nums.length;
    let i;
    for(i=len-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            let j = 1;
            let min = nums[len-j];
            while(min<=nums[i-1]){//find the first item that greater than nums[i]
                j++;
                min = nums[len-j];
            }
            let temp = min;//swap
            nums[len-j] = nums[i-1];
            nums[i-1] = temp;
            let rear=len-1;
            for(let k=i;k<(i+len-1)/2;k++){//remain reverse
                let temp=nums[k];
                nums[k]=nums[rear];
                nums[rear--]=temp;
            }
            break;
        }
    }
    if(i === 0){
        nums.reverse();
    }
};