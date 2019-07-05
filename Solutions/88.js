/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Runtime: 52 ms, faster than 92.46% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.9 MB, less than 54.88% of JavaScript online submissions for Merge Sorted Array.
var merge = function(nums1, m, nums2, n) {
    let k = m+n-1;
    while(m>0 && n>0){
        if(nums1[m-1] > nums2[n-1]){
            nums1[k--] = nums1[m-1];
            m--;
        }else{
            nums1[k--] = nums2[n-1];
            n--;
        }
    }
    while(n>0){
        nums1[k--] = nums2[n-1];
        n--;
    }
};