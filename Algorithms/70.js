/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 52 ms, faster than 94.61% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 33.8 MB, less than 46.26% of JavaScript online submissions for Climbing Stairs.
var climbStairs = function(n) {
    a = b = 1;
    while(n--){
        a = (b += a) - a;
    }
    return a;
};
// 31/45 test case passed
// Time Limit Exceeded
// var climbStairs = function(n) {
//     if(n < 2){
//         return 1;
//     }
//     return climbStairs(n-1) + climbStairs(n-2);
// };