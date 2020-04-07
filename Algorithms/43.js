/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// Runtime: 88 ms, faster than 57.09% of JavaScript online submissions for Multiply Strings.
// Memory Usage: 38.4 MB, less than 25.00% of JavaScript online submissions for Multiply Strings.
var multiply = function(num1, num2) {
    let len1=num1.length,len2=num2.length;
    let rtn=[];
    for(let i=len1-1;i>-1;i--){
        for(let j=len2-1;j>-1;j--){
            let sum=(num1[i]-0)*(num2[j]-0);
            let p1=i+j,p2=p1+1;
            sum += (rtn[p2]?rtn[p2]:0);
            rtn[p1]=(rtn[p1]?rtn[p1]:0)+parseInt(sum/10);
            rtn[p2]=(sum)%10;
        }
    }
    while(rtn[0]=='0'){
        rtn.splice(0,1);
    }
    if(rtn.length===0){
        return "0";
    }
    return rtn.join("").toString();
};