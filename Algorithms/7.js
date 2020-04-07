/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res=0;
    if(x<0){
        res = +("-".concat(x.toString().slice(1).split("").reverse().join("")));
    }else{
        res = +(x.toString().split("").reverse().join(""));
    }
    if(res<-2147483648 || res>2147483647){
        return 0;
    }else{
        return res;
    }
};