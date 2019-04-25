/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for 3Sum Closest.
//Memory Usage: 35.5 MB, less than 18.92% of JavaScript online submissions for 3Sum Closest.
var threeSumClosest = function(nums, target) {
    let len=nums.length;
    nums=nums.sort((a,b) => {
        return a-b;
    })
    let rtn=nums[0]+nums[1]+nums[2];
    if(len === 3){
        return rtn;
    }
    let min=Math.abs(target-rtn);
    for(let i=0;i<len-1;i++){
    	if (i > 0 && nums[i] === nums[i-1]) continue;
        let left=i+1,right=len-1;
        while(left<right){
            let tempSum=nums[left]+nums[i]+nums[right];
            let dis=Math.abs(target-tempSum);
            if(dis<min){
                rtn=tempSum;
                min=dis;
                while(left<right && nums[left]===nums[left+1]) left++;
                while(left<right && nums[right]===nums[right-1]) right--;
            }
            if(tempSum===target){
                return target;
            }else if(tempSum<target){
                left++;
            }else{
                right--;
            }
        }
        
    }
    return rtn;
};