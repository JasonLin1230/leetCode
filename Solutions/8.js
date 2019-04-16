/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res=parseInt(str);
    if(isNaN(res)){
        return 0;
    }else if(res<-2147483648){
        return -2147483648;
    }else if(res>2147483647){
        return 2147483647;
    }else{
        return res;
    }
};