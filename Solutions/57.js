/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Runtime: 68 ms, faster than 98.28% of JavaScript online submissions for Insert Interval.
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions for Insert Interval.
var insert = function(intervals, newInterval) {
    let len = intervals.length;
    let flag = false,front = 0;
    for(let i=0;i<len;i++){
        if(intervals[i][1]<newInterval[0]){
            continue;
        }else{
            front = i;
            flag = true;
            for(var j=i;j<len;j++){
                if(newInterval[1]>intervals[j][0] && newInterval[1]>intervals[j][1]){
                    continue;
                }
                if(newInterval[1]>=intervals[j][0]){
                    let temp = [Math.min(intervals[i][0],newInterval[0]),intervals[j][1]];
                    intervals.splice(i,j-i+1,temp);
                    return intervals;
                }else{
                    let temp = [Math.min(intervals[i][0],newInterval[0]),newInterval[1]];
                    intervals.splice(i,j-i,temp);
                    return intervals;
                }
            }
            let temp = [Math.min(intervals[i][0],newInterval[0]),newInterval[1]];
            intervals.splice(i,j-i,temp);
            return intervals;
        }
    }
    if(!flag){
        intervals.push(newInterval);
        return intervals;
    }
};