/**
 * @param {number} x
 * @return {number}
 */
// binary search
// Your runtime beats 93.51 % of javascript submissions.
var mySqrt = function(x) {
    if(x == 0){
        return 0;
    }
    let left = 1, right = x;
    while(left <= right){
        let mid = parseInt((left + right)/2);
        if(mid*mid > x){
            right = mid - 1;
        }else if((mid+1)*(mid+1) > x){
            return mid;
        }else{
            left = mid + 1;
        }
    }
};