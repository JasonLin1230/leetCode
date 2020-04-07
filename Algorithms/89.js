/**
 * @param {number} n
 * @return {number[]}
 */
// Runtime: 48 ms, faster than 95.18% of JavaScript online submissions for Gray Code.
// Memory Usage: 34 MB, less than 42.50% of JavaScript online submissions for Gray Code.
var grayCode = function(n) {
    let rtn = [0];
    for(let i=1;i< (1<<n);i++){
        rtn.push(i^(i>>1));
    }
    return rtn;
};