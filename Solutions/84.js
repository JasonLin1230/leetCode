/**
 * @param {number[]} heights
 * @return {number}
 */

// 尝试一：
// var largestRectangleArea = function(heights) {
//     let len = heights.length, max = 0;
//     while(len > 0){
//         let temp = len * getMin(heights);
//         console.log(heights, max);
//         if(temp > max){
//             max = temp;
//         }
//         if(heights[0] > heights[len-1]){
//             heights.splice(len-1,1);
//         }else{
//             heights.splice(0,1);
//         }
//         len--;
//     }
//     return max;
// };
// var getMin = function(arr){
//     let array = Array.from(arr);
//     array = array.sort((a,b) => {
//         return a - b;
//     })
//     return array[0];
// }

// 尝试二：
// Runtime: 60 ms, faster than 93.86% of JavaScript online submissions for Largest Rectangle in Histogram.
// Memory Usage: 38.5 MB, less than 20.40% of JavaScript online submissions for Largest Rectangle in Histogram.
var largestRectangleArea = function(heights) {
    let len = heights.length, lessFromLeft = [], lessFromRight = [], max = 0;
    lessFromLeft[0] = -1, lessFromRight[len-1] = len;
    for(let i = 1; i < len; i++){
        let p = i-1;
        while(p > -1 && heights[p] >= heights[i]){
            p = lessFromLeft[p];
        }
        lessFromLeft[i] = p;
    }
    for(let i = len-2; i > -1; i--){
        let p = i+1;
        while(p < len && heights[p] >= heights[i]){
            p = lessFromRight[p];
        }
        lessFromRight[i] = p;
    }
    for(let i = 0 ;i < len; i++){
        max = Math.max(max, heights[i] * (lessFromRight[i] - lessFromLeft[i] - 1))
    }
    return max;
};