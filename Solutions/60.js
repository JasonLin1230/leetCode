/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// v1
// Runtime: 1696 ms, faster than 18.13% of JavaScript online submissions for Permutation Sequence.
// Memory Usage: 41.5 MB, less than 13.25% of JavaScript online submissions for Permutation Sequence.
// crying
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
    var rtn = {
        r: 1
    }
    return permutation(arr,rtn,tempRtn,k);
};
var permutation = function(arr,rtn,temp,k){
    let len=arr.length;
    if(len===1){
        temp.push(arr[0]);
        if(rtn.r++ === k){
            return temp.join("");
        }
        temp.pop();
        return 0;
    }
    for(let i=0;i<len;i++){
        temp.push(arr[i]);
        let tempNums=arr.slice(0);
        tempNums.splice(i,1);
        let rt = permutation(tempNums,rtn,temp,k);
        if(rt === 0){
            temp.pop();
        }else{
            return rt;
        }
    }
    return 0;
}
// v2
// Your runtime beats 97.19 % of javascript submissions.
function get_fac(n) {
    let res = [];
    res[0]=1;
    for (let i=1; i<=n; i++) {
        res[i] = res[i-1]*i;
    }
    return res;
}
var getPermutation = function(n, k) {
    let ans = "";
    const vis = [], fac=get_fac(n);
    for (let i=0; i<n; i++) {
        vis[i] = i+1;
    }
    while (vis.length) {
        let res=fac[n-1];
        if (k===res) {
            ans+=vis[0];
            vis.splice(0,1);
        }
       else if (k>res) {
            let cnt = k%res===0?parseInt(k/res)-1:parseInt(k/res);
            k-=cnt * res;
            while (cnt >= vis.length) cnt--;
            ans += vis[cnt];
            vis.splice(cnt,1);
           

        } else {
            ans+=vis[0];
            vis.splice(0,1);
        }
        n--;
    }
    return ans;
};