/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 68 ms, faster than 94.01% of JavaScript online submissions for Longest Valid Parentheses.
// Memory Usage: 36.6 MB, less than 31.04% of JavaScript online submissions for Longest Valid Parentheses.
var longestValidParentheses = function(s) {
    let stack=[];
    let len=s.length;
    let max=0;
    let back = -1;
    for(let i=0;i<len;i++){
        if(s[i] === '(') 
            stack.push(i);            
        else {
            if (stack.length === 0)
                back = i;
            else{
                stack.pop();
                if(stack.length === 0) max=Math.max(max,i-back);
                else max=Math.max(max,i-stack[stack.length - 1]);
            }
        }
    }
    return max;
};