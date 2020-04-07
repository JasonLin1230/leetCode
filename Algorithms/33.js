/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Runtime: 60 ms, faster than 99.85% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 34.1 MB, less than 20.72% of JavaScript online submissions for Search in Rotated Sorted Array.
var search = function(nums, target) {
    let len=nums.length;
    //special charge
    if(len === 0){
        return -1;
    }
    if(len === 1 && target !== nums[0]){
        return -1;
    }else if(len ===1){
        return 0;
    }
    if(len===2){
        if(target === nums[0]){
            return 0;
        }else if(target === nums[1]){
            return 1;
        }else{
            return -1;
        }
    }
    //find the rotate pivot
    let left=0,right=len-1,pivot;
    while(left<=right){
        pivot=Math.floor((left+right)/2);
        if(nums[pivot]<nums[pivot-1] && nums[pivot]<nums[pivot+1]){
            break;
        }else if(nums[pivot]<nums[right]){
            right=pivot-1;
        }else{
            left=pivot+1;
        }
    }
    //child search
    if(target<=nums[len-1]){
        left=pivot,right=len-1;
        return binarySearch(nums,left,right,target);
    }else{
        left=0,right=pivot-1;
        return binarySearch(nums,left,right,target);
    }
    return -1;
};
var binarySearch = function(nums,left,right,target){
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}