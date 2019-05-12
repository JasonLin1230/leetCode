/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Your runtime beats 72.73 % of javascript submissions.
var myPow = function(x, n) {
    if(n==0){
        return 1.0;
    }
    if(n<0){
        n=-n;
        x=1/x;
    }
    if(n==1){
        return x;
    }
    let rtn=x;
    let f=(n%2==0)?1:0;
    n=Math.floor(n/2);
    while(n>1){
        rtn=rtn*x;
        n--;
    }
    return f?rtn*rtn:x*rtn*rtn;
};
