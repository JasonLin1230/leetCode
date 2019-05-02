/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Runtime: 60 ms, faster than 99.01% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 35.6 MB, less than 13.58% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
var searchRange = function(nums, target) {
    let len=nums.length;
    let index=binarySearch(nums,0,len-1,target);
    if(index===-1){
        return [-1,-1];
    }
    let start,end;
    let left=index,right=len-1,mid;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]===target && nums[mid+1]!==target){
            end=mid;
            break;
        }else if(nums[mid]===target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    left=0,right=index;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]===target && nums[mid-1]!==target){
            start=mid;
            break;
        }else if(nums[mid]===target){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return [start,end];
};
var binarySearch = function(nums,left,right,target){
    let mid;
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
    return -1;
}