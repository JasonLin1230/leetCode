/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length===0){
        return [[]];
    }
    let rtn=[],tempRtn=[];
    permutation(nums,tempRtn,rtn);
    return rtn;
};
var permutation = function(arr,temp,rtn){
    let len=arr.length;
    if(len===1){
        temp.push(arr[0]);
        rtn.push(Array.from(temp));
        temp.pop();
        return;
    }
    for(let i=0;i<len;i++){
        temp.push(arr[i]);
        let tempNums=arr.slice(0);
        tempNums.splice(i,1);
        permutation(tempNums,temp,rtn);
        temp.pop();
    }
}