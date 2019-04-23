/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len=nums.length,res=[];
    if(len<3){
        return [];
    }
    let arr=nums.sort((a,b) => {
        return a-b;
    })
    let i=0,tested1=[];
    while(i<len){
        if(tested1.indexOf(arr[i])!==-1){
            i++;
            continue;
        }
        tested1.push(arr[i]);
        let j=len-1,tested2=[];
        while(j>i){
            if(tested2.indexOf(arr[j])!==-1){
                j--;
                continue;
            }
            tested2.push(arr[j]);
            let tempSum=arr[i]+arr[j];
            let tempNums=arr.slice(i+1,j);
            if(tempNums.indexOf(0-tempSum) !== -1){
                tested2.push(0-tempSum);
                let temp=[arr[i],0-tempSum,arr[j]];
                if(res.indexOf(temp) === -1){
                    res.push(temp);
                }
            }
            j--;
        }
        i++;
    }
    return res;
};