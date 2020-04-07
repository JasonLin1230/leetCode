/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 128 ms, faster than 74.62% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 38.9 MB, less than 19.41% of JavaScript online submissions for Add Two Numbers.
// 待优化,不使用中间数组
 var addTwoNumbers = function(l1, l2) {
    var arr1=[],arr2=[];
    while(l1 !== null){
        arr1.push(l1.val);
        l1=l1.next;
    }
    while(l2 !== null){
        arr2.push(l2.val);
        l2=l2.next;
    }
    var len1=arr1.length,len2=arr2.length,i=0,j=0,tempSum,temp1,temp2;
    var resArr=[],index=0;
    while(i<len1 && j<len2){
        temp1=arr1.shift();
        temp2=arr2.shift();
        tempSum=(resArr[index]?resArr[index]:0)+temp1+temp2;
        if(tempSum>9){
            resArr[index]=tempSum-10;
            resArr[index+1]=1;
        }else{
            resArr[index]=tempSum;
        }
        len1--;
        len2--;
        index++;
    }
    while(i<len1){
        temp1=arr1.shift();
        tempSum=(resArr[index]?resArr[index]:0)+temp1;
        if(tempSum>9){
            resArr[index]=tempSum-10;
            resArr[index+1]=1;
        }else{
            resArr[index]=tempSum;
        }
        len1--;
        index++;
    }
    while(j<len2){
        temp2=arr2.shift();
        tempSum=(resArr[index]?resArr[index]:0)+temp2;
        if(tempSum>9){
            resArr[index]=tempSum-10;
            resArr[index+1]=1;
        }else{
            resArr[index]=tempSum;
        }
        len2--;
        index++;
    }
    var preNode=new ListNode(0);
    for(var i=resArr.length-1;i>-1;i--){
        var res=new ListNode(resArr[i]);
        if(i !== resArr.length-1){
            res.next=preNode;
        }
        preNode=res;
    }
    return res;
};

// edition1
// 当节点过多时，parseInt无法表示过大的数
var addTwoNumbers = function(l1, l2) {
    var arr1=[],arr2=[];
    while(l1 !== null){
        arr1.unshift(l1.val);
        l1=l1.next;
    }
    while(l2 !== null){
        arr2.unshift(l2.val);
        l2=l2.next;
    }
    var resNum=parseInt(arr1.join(""))+parseInt(arr2.join(""));
    var resArr=resNum.toString().split("");
    console.log(resArr);
    var preNode=new ListNode();
    for(var i=0;i<resArr.length;i++){
        var res=new ListNode();
        res.val=resArr[i];
        if(i=0){
            res.next=null;
        }else{
            res.next=preNode;
        }
        preNode=res;
    }
    return res;
};