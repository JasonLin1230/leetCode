/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var startIndex=0,endIndex=0,maxLength=0,temp,tempStart=0,tempEnd=0;
var longestPalindrome = function(s) {
    var len=s.length;
    for(var i=0;i<len;++i){
        innerLoop(s,i,0);
        innerLoop(s,i,1);
    }
    return s.split("").slice(startIndex,endIndex+1).join("");
};
var innerLoop = function(s,i,isEven){
    var len=s.length;
    temp = isEven?0:1;
    for(var j = 1; j < len; j++) {
        if(i - j + 1 < 0 || i + j >= len || s[isEven?(i-j+1):(i-j)] != s[i + j])
            break;
        temp += 2;
        tempStart = isEven?(i-j+1):(i-j);
        tempEnd = i+j;
    }
    if(temp>maxLength){
        maxLength = temp;
        startIndex = tempStart;
        endIndex = tempEnd;
    }
}