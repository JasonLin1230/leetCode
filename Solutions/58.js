/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 44 ms, faster than 99.90% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 34.7 MB, less than 5.03% of JavaScript online submissions for Length of Last Word.
var lengthOfLastWord = function(s) {
    let arr = s.trim().split("").reverse();
    let i = 0, len = arr.length;
    while(arr[i] != ' ' && i < len){
        i++;
    }
    return i;
};