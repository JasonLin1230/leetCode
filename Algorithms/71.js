/**
 * @param {string} path
 * @return {string}
 */
// Runtime: 64 ms, faster than 91.01% of JavaScript online submissions for Simplify Path.
// Memory Usage: 35.8 MB, less than 66.22% of JavaScript online submissions for Simplify Path.
var simplifyPath = function(path) {
    let arr = path.split("/");
    arr = arr.filter((item) => {
        return item != '' && item != '.'
    })
    let len = arr.length;
    let rtn = [];
    for(let i=0;i<len;i++){
        if(arr[i] == '..'){
            if(rtn.length != 0){
                rtn.pop();
            }
        }else{
            rtn.push(arr[i]);
        }
    }
    let rtnLen = rtn.length;
    if(rtnLen == 0){
        return '/';
    }
    let ans = '';
    for(let i=0;i<rtnLen;i++){
        ans = ans + '/' + rtn[i];
    }
    return ans;
};