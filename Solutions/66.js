/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Runtime: 44 ms, faster than 99.88% of JavaScript online submissions for Plus One.
// Memory Usage: 33.9 MB, less than 26.52% of JavaScript online submissions for Plus One.
var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len-1;i>-1;i--){
        let temp;
        if(i == len-1){
            temp = digits[i] + 1;
        }else{
            temp = digits[i];
        }
        if(temp < 10){
            digits[i] = temp;
            break;
        }else{
            let u = temp%10;
            let d = parseInt(temp/10);
            digits[i] = u;
            if(i == 0){
                digits.unshift(d);
            }else{
                digits[i-1] += d;
            }
        }
    }
    return digits;
};