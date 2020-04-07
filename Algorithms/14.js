/**
 * @param {string[]} strs
 * @return {string}
 */
//Runtime: 64 ms, faster than 80.85% of JavaScript online submissions for Longest Common Prefix.
//Memory Usage: 35.3 MB, less than 32.98% of JavaScript online submissions for Longest Common Prefix.
var longestCommonPrefix = function(strs) {
    let res=[],len=strs.length;
    if(len === 0){//判断是否为空，否则后一句报错
        return "";
    }
    let minItemLen=strs[0].length;
    for(let i=0;i<len;i++){
        strs[i]=strs[i].split("");
        let curLen=strs[i].length;
        minItemLen=curLen<minItemLen?curLen:minItemLen;
    }
    let index=0,flag=true;
    while(index<minItemLen && flag){
        let j;
        for(j=0;j<len-1;j++){
            if(strs[j][index] !== strs[j+1][index]){
                flag=false;
                break;
            }
        }
        if(flag){
            res.push(strs[j][index++]);  
        }
    }
    return res.join("");
};