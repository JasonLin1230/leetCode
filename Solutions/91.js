/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 48 ms, faster than 99.35% of JavaScript online submissions for Decode Ways.
// Memory Usage: 35.2 MB, less than 74.76% of JavaScript online submissions for Decode Ways.
var numDecodings = function(s) {
    let nums = s.split("");
    let len = nums.length,ppre = 1, pre = nums[0] == '0'?0:1;
    if(len == 0 || s == '0'){
        return 0;
    }
    let rtn = 1;
    for(let i=2;i<=len;i++){
        rtn = 0;
        let first = nums[i-1];
        let second = parseInt(s.substring(i-2,i));
        if(first != 0){
            rtn += pre;
        }
        if(second>9&&second<27){
            rtn+=ppre;
        }
        ppre = pre;
        pre = rtn;
    }
    return rtn;
};