/**
 * @param {string} digits
 * @return {string[]}
 */

//divide-conquer、recursion
let map={
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
};
var letterCombinations = function(digits) {
    let len = digits.length;
    if(len === 0){
        return [];
    }else if(len === 1){
        return map[digits];
    }else{
        let pre=digits.slice(0,1);
        let remain=digits.slice(1);
        //trick
        //divide-conquer、recursion
        return merge(map[pre],letterCombinations(remain));
    }
};
var merge = function(a,b){
    let rtn=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            rtn.push(a[i]+b[j]);
        }
    }
    return rtn;
}
