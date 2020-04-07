/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Runtime: 44 ms, faster than 99.84% of JavaScript online submissions for Unique Paths.
// Memory Usage: 34.1 MB, less than 48.17% of JavaScript online submissions for Unique Paths.
var uniquePaths = function(m, n) {
    if(m ==1 || n==1){
        return 1;
    }
    let rtn = [];
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            rtn[j] = (rtn[j] || 1) + (rtn[j-1] || 1);
        }
    }
    return rtn[n-1];
};
//original code 41/62 test case passed
// var checkEnd = function(position, m, n){
//     if(position.x == m-1 && position.y == n-1){
//         return true;
//     }else{
//         return false;
//     }
// }
// var path = function(position,m, n){
//     if(checkEnd(position,m,n)){
//         position.total++;
//         return;
//     }
//     if(position.x != m-1){
//         position.x++;
//         path(position,m,n);
//         position.x--;
//     }
//     if(position.y != n-1){
//         position.y++;
//         path(position,m,n);
//         position.y--;
//     }
// }
// var uniquePaths = function(m, n) {
//     var total = 0;
//     var position = {
//         x: 0,
//         y: 0,
//         total: 0
//     }
//     path(position,m,n);
//     return position.total;
// };
