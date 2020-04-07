/**
 * @param {string} s
 * @return {number}
 */

// algorithm Sliding Window
// key   while(i...,j...)  and  indexOf
var lengthOfLongestSubstring = function(s) {
    var arr=s.split("");
    var len=arr.length;
    if(len<2){
        return len;
    }
    var i=0,j=0,max=0,temp=[];
    while(i<len && j<len){
        if(temp.indexOf(arr[j]) === -1){
            temp.push(arr[j++]);
            var tempMax=j-i;
            max=max>tempMax?max:tempMax;
        }else{
            temp.splice(0,1);
            i++;
        }
    }
    return max;
};

// failed
//某一超长的测试用例会导致Time Limit Exceeded

// var lengthOfLongestSubstring = function(s) {
//     var arr=s.split("");
//     var len=arr.length;
//     if(len<2){
//         return len;
//     }
//     var max=0;
//     for(var i=1;i<len;i++){
//         for(var j=i-1;j>-1;j--){
//             if(Array.from(new Set(arr.slice(j,i+1))).length<arr.slice(j,i+1).length){
//                 break;
//             }
//         }
//         if(j === -1){
//             max=i+1;
//         }else{
//             if(i-j>max){
//                 max=i-j;
//             }
//         }
//     }
//     return max;
// };
