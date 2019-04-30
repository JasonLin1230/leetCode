/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Jump Game II.
// Memory Usage: 35.6 MB, less than 90.00% of JavaScript online submissions for Jump Game II.

// 东方财富笔试编程第一题

var jump = function(nums) {
    let min_steps=0,front=0,rear=0;
    while(rear<nums.length-1){
        let max_dis=0;
        for(let i=front;i<=rear;i++){
            max_dis=Math.max(max_dis,i+nums[i]);
        }
        front=rear+1;
        rear=max_dis;
        min_steps++;
    }
    return min_steps;
};