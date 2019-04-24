/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len=nums.length,res=[];
    if(len<3){
        return [];
    }
    nums=nums.sort((a,b) => {
        return a-b;
    })
    for(let i=0;i<len-1;i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let left=i+1,right=len-1;
        while(left<right){//内层循环使用two point
            let tempSum=nums[left]+nums[i]+nums[right];
            if(nums[left]+nums[i]+nums[right] === 0){
                res.push([nums[left],nums[i],nums[right]]);

                //tricky
                //avoid the same match
                while(left<right && nums[left]===nums[left+1]) left++;
                while(left<right && nums[right]===nums[right-1]) right--;
                left++;
                right--;
            }else if(tempSum<0){
                left++;
            }else{
                right--;
            }
            
        }
    }
    return res;
};

// var threeSum = function(nums) {
//     let len=nums.length,res=[];
//     if(len<3){
//         return [];
//     }
//     let arr=nums.sort((a,b) => {
//         return a-b;
//     })
//     let i=0,tested1=[];
//     while(i<len){
//         if(tested1.indexOf(arr[i])!==-1){
//             i++;
//             continue;
//         }
//         tested1.push(arr[i]);
//         let j=len-1,tested2=[];
//         while(j>i){//内层循环存在indexOf会导致O(n^3),以至于TLE
//             if(tested2.indexOf(arr[j])!==-1){
//                 j--;
//                 continue;
//             }
//             tested2.push(arr[j]);
//             let tempSum=arr[i]+arr[j];
//             let tempNums=arr.slice(i+1,j);
//             if(tempNums.indexOf(0-tempSum) !== -1){
//                 tested2.push(0-tempSum);
//                 let temp=[arr[i],0-tempSum,arr[j]];
//                 if(res.indexOf(temp) === -1){
//                     res.push(temp);
//                 }
//             }
//             j--;
//         }
//         i++;
//     }
//     return res;
// };