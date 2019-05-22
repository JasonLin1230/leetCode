/**
 * @param {number} n
 * @return {number[][]}
 */
// Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Spiral Matrix II.
// Memory Usage: 33.7 MB, less than 93.85% of JavaScript online submissions for Spiral Matrix II.
var generateMatrix = function(n) {
    let rtn = [],index = 1;
    for(let i=0;i<n;i++){
        rtn.push(new Array());
    }
    let top = 0,left = 0,right = n,bottom = n;
    while(top < bottom && left < right){
        for(let i=left;i<right;i++){
            rtn[top][i] = index++;
        }
        top++;
        
        for(let i=top;i<bottom;i++){
            rtn[i][right-1] = index++;
        }
        right--;
        
        for(let i=right-1;i>=left;i--){
            rtn[bottom-1][i] = index++;
        }
        bottom--;
        
        for(let i=bottom-1;i>=top;i--){
            rtn[i][left] = index++;
        }
        left++;
    }
    return rtn;
};