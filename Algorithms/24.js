/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let rtn=new ListNode(0);
    let pre=rtn;
    while(head!==null && head.next!==null){
        let odd=new ListNode(head.val);
        let even=new ListNode(head.next.val);
        even.next=odd;
        pre.next=even;
        pre=odd;
        head=head.next.next;
    }
    if(head!==null){
        pre.next=head;
    }
    return rtn.next;
};