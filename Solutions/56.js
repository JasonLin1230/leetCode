/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Runtime: 76 ms, faster than 97.10% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 37.4 MB, less than 34.23% of JavaScript online submissions for Merge Intervals.
var merge = function(intervals) {
    let len = intervals.length;
    if(len<1){
        return [];
    }
    intervals = intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    let rtn = [intervals[0]], pre = intervals[0];
    for(let i=1;i<len;i++){
        if(intervals[i][0] <= pre[1]){
            let temp = [Math.min(pre[0],intervals[i][0]),Math.max(pre[1],intervals[i][1])];
            pre = temp;
            rtn.pop();
            rtn.push(temp);
        }else{
            rtn.push(intervals[i]);
            pre = intervals[i];
        }
    }
    return rtn;
};