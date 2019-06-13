/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// solution 1
// Runtime: 56 ms, faster than 94.08% of JavaScript online submissions for Subsets.
// Memory Usage: 35.3 MB, less than 38.76% of JavaScript online submissions for Subsets.
var subsets = function(nums) {
    let rtn = [], tempRtn = [];
    recur(tempRtn,rtn,nums,0);
    return rtn;
};
var recur = function(tempRtn,rtn,arr,s){
    rtn.push(Array.from(tempRtn));
    for(let i=s;i<arr.length;i++){
        tempRtn.push(arr[i]);
        recur(tempRtn,rtn,arr,i+1);
        tempRtn.pop();
    }
}
// solution 2
// Runtime: 68 ms, faster than 26.94% of JavaScript online submissions for Subsets.
// Memory Usage: 36.2 MB, less than 9.07% of JavaScript online submissions for Subsets.
var subsets = function(nums) {
    let len = nums.length, rtn = [], tempRtn = [];
    rtn.push([]);
    if(len == 0){
        return rtn;
    }
    rtn.push(nums);
    for(let i=1;i<=Math.floor(len/2);i++){
        recur(tempRtn,rtn,nums,0,len,i);
    }
    let hash = {}, final = [];
    for(let i = 0, len2 = rtn.length; i < len2; i++){  
        if(!hash[rtn[i]]){  
            final.push(rtn[i]);  
            hash[rtn[i]] = true;  
        }  
    }  
    return final;
};
var recur = function(tempRtn,rtn,array,s,r,k){
    if(k == 0){
        let remain = array.filter((item) => {
            return tempRtn.indexOf(item) == -1
        })
        rtn.push(Array.from(tempRtn));
        rtn.push(remain);
        return;
    }
    for(let i=s;i<r;i++){
        tempRtn.push(array[i]);
        recur(tempRtn,rtn,array,i+1,r,k-1);
        tempRtn.pop();
    }
}