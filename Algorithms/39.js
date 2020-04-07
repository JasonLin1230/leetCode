/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Runtime: 76 ms, faster than 97.05% of JavaScript online submissions for Combination Sum.
// Memory Usage: 36.6 MB, less than 47.76% of JavaScript online submissions for Combination Sum.
var combinationSum = function(candidates, target) {
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
        //Array.from
        rtn.push(Array.from(tempRtn));
        return;
    }
    for(let i=index;i<arr.length;i++){
        if(i>index && arr[i]===arr[i-1]){
            continue;
        }
        tempRtn.push(arr[i]);
        solve(arr,i,target-arr[i],tempRtn,rtn);
        solve(arr,i+1,target-arr[i],tempRtn,rtn);//when each item just can be used once
        tempRtn.pop();
    }
}