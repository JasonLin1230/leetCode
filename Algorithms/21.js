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
// Runtime: 68 ms, faster than 99.80% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.5 MB, less than 64.90% of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function(l1, l2) {
    if(l1==null){
        return l2;
    }
    if(l2==null){
        return l1;
    }
    let rtn=new ListNode(0);
    let pre=rtn;
    while(l1!==null && l2!==null){
        if(l1.val>l2.val){
            temp=new ListNode(l2.val);
            pre.next=temp;
            pre=temp;
            l2=l2.next;
        }else{
            temp=new ListNode(l1.val);
            pre.next=temp;
            pre=temp;
            l1=l1.next;
        }
    }
    while(l1!==null){
        temp=new ListNode(l1.val);
        pre.next=temp;
        pre=temp;
        l1=l1.next;
    }
    while(l1!==null){
        temp=new ListNode(l1.val);
        pre.next=temp;
        pre=temp;
        l1=l1.next;
    }
    while(l2!==null){
        temp=new ListNode(l2.val);
        pre.next=temp;
        pre=temp;
        l2=l2.next;
    }
    return rtn.next;
};