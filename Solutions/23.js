/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Runtime: 92 ms, faster than 87.40% of JavaScript online submissions for Merge k Sorted Lists.
// Memory Usage: 43.3 MB, less than 13.85% of JavaScript online submissions for Merge k Sorted Lists.
var mergeKLists = function(lists) {
    if(lists.length===0 || lists==null){
        return null;
    }
    if(lists.length===1){
        return lists instanceof Array?lists[0]:lists;
    }
    let　mid = Math.floor(lists.length/2),
    left = lists.slice(0, mid),
    right = lists.slice(mid);
    return mergeTwoLists(mergeKLists(left),mergeKLists(right));
};
var mergeTwoLists = function(item1, item2) {
    let l1=item1 instanceof Array?item1[0]:item1;
    let l2=item2 instanceof Array?item2[0]:item2;
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