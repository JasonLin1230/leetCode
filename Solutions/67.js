/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Runtime: 56 ms, faster than 99.27% of JavaScript online submissions for Add Binary.
// Memory Usage: 35.4 MB, less than 88.08% of JavaScript online submissions for Add Binary.
var addBinary = function(a, b) {
    let arr1 = a.split(""), arr2 = b.split("");
    let len1 = arr1.length, len2 = arr2.length;
    while(len1 > len2){
        arr2.unshift("0");
        len2++;
    }
    while(len2 > len1){
        arr1.unshift("0");
        len1++;
    }
    for(let i = len1-1; i > -1; i--){
        let temp = parseInt(arr1[i]) + parseInt(arr2[i]);
        if(temp > 1){
            let u = temp%2;
            let d = parseInt(temp/2);
            arr1[i] = u;
            if(i > 0){
                arr1[i-1] = parseInt(arr1[i-1]) + d;
            }else{
                arr1.unshift(d);
            }
        }else{
            arr1[i] = temp;
        }
    }
    return arr1.join("");
};