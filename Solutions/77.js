/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// Runtime: 112 ms, faster than 69.42% of JavaScript online submissions for Combinations.
// Memory Usage: 41.7 MB, less than 54.29% of JavaScript online submissions for Combinations.
var combine = function(n, k) {
    let rtn = [], tempRtn = [];
    recur(tempRtn,rtn,1,n,k);
    return rtn;
};
var recur = function(tempRtn,rtn,s,n,k){
    if(k == 0){
        rtn.push(Array.from(tempRtn));
        return;
    }
    for(let i=s;i<=n;i++){
        tempRtn.push(i);
        recur(tempRtn,rtn,i+1,n,k-1);
        tempRtn.pop();
    }
}