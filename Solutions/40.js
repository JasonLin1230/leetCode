/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Runtime: 72 ms, faster than 99.86% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 36.5 MB, less than 59.26% of JavaScript online submissions for Combination Sum II.
var combinationSum2 = function(candidates, target) {
    candidates=candidates.sort((a,b) => {
        return a-b;
    });
    let tempRtn=[],rtn=[];
    solve(candidates,0,target,tempRtn,rtn);
    return rtn;
};
var solve = function(arr,index,target,tempRtn,rtn){
    if(target < 0){
        return;
    }
    if(target === 0){
        rtn.push(Array.from(tempRtn));
        return;
    }
    for(let i=index;i<arr.length;i++){
        if(i>index && arr[i]===arr[i-1]){
            continue;
        }
        tempRtn.push(arr[i]);
        solve(arr,i+1,target-arr[i],tempRtn,rtn);
        tempRtn.pop();
    }
}