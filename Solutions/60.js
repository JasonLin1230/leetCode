/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */



// my origin code
// When I submited,the system told me that I can't pass some case.
// but when I run the error test case ,my answer is same as the right answer. 
// Fuck
var getPermutation = function(n, k) {
    if(n === 0){
        return "";
    }
    let arr=[];
    while(n>0){
        arr.unshift(n);
        n--;
    }
    let tempRtn=[];
    return permutation(arr,tempRtn,k);
};
let myCount = 1;
var permutation = function(arr,temp,k){
    let len=arr.length;
    if(len===1){
        temp.push(arr[0]);
        // myCount++;
        if(myCount++ === k){
            return temp.join("");
        }
        temp.pop();
        return 0;
    }
    for(let i=0;i<len;i++){
        temp.push(arr[i]);
        let tempNums=arr.slice(0);
        tempNums.splice(i,1);
        let rtn = permutation(tempNums,temp,k);
        if(rtn === 0){
            temp.pop();
        }else{
            return rtn;
        }
    }
    return 0;
}