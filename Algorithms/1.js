/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapIndex = new Map();
    let len = nums.length;
    for(let i=0;i<len;i++){
        mapIndex.set(nums[i],i);
    }
    for(let i=0;i<len;i++){
        let temp=target-nums[i];
        if(mapIndex.has(temp) && mapIndex.get(temp) != i){
            return [i,mapIndex.get(temp)];
        }
    }
};