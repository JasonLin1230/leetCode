/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let pre = "1";
    if(n===1){
        return pre;
    }
    while(n-1>0){
        pre=recursion(pre);
        n--;
    }
    return pre;
};
var recursion = function(pre){
    let len=pre.length;
    if(len===1){
        return "11";
    }
    let rtn=[];
    let count=1,i;
    for(i=1;i<len;i++){
        if(pre[i]!=pre[i-1]){
            rtn.push(count,pre[i-1]);
            count=1;
        }else{
            count++;
        }
    }
    rtn.push(count,pre[i-1]);
    return rtn.join("");
}