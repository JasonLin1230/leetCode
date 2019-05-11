/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Runtime: 108 ms, faster than 96.28% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 44.6 MB, less than 91.82% of JavaScript online submissions for Group Anagrams.
var groupAnagrams = function(strs) {
    let mapIndex = new Map();
    let rtn = [];
    let len = strs.length;
    for(let i=0;i<len;i++){
        let tempArr = strs[i].split("").sort().join("");
        if(mapIndex.has(tempArr)){
    		rtn[mapIndex.get(tempArr)].push(strs[i]);
        }else{
            mapIndex.set(tempArr,i);
            rtn[i]=[strs[i]];
        }
    }
    rtn=rtn.filter((item) => {
        return item != 'undefined';
    })
    return rtn;
};