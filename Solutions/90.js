/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Runtime: 60 ms, faster than 90.04% of JavaScript online submissions for Subsets II.
// Memory Usage: 36.4 MB, less than 50.32% of JavaScript online submissions for Subsets II.
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => {
        return a-b;
    })
    let rtn = [], tempRtn = [];
    recur(tempRtn,rtn,nums,0);
    return rtn;
};
var recur = function(tempRtn,rtn,nums,s){
    rtn.push(Array.from(tempRtn));
    for(let i=s;i<nums.length;i++){
        if(i>s && nums[i]==nums[i-1]) continue;
        tempRtn.push(nums[i]);
        recur(tempRtn,rtn,nums,i+1);
        tempRtn.pop();
    }
}