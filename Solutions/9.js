/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    var arr=x.toString().split("");
    var res=true;
    while(arr.length>1){
        var front=arr.shift();
        var rear=arr.pop();
        if(front == rear){
            x.length-=2;
        }else{
            res=false;
            break;
        }
    }
    return res;
};