/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// Runtime: 64 ms, faster than 97.60% of JavaScript online submissions for Rotate List.
// Memory Usage: 35.5 MB, less than 71.78% of JavaScript online submissions for Rotate List.
var rotateRight = function(head, k) {
    let head_c = head, count = 0;
    while(head_c!=null){
        count++;
        head_c = head_c.next;
    }
    let c = k % count;
    let slow = head,fast = new ListNode(0);
    fast = head;
    if(k == 0 || count == 0 || c == 0){
        return head;
    }
    while(c > 0){
        fast = fast.next;
        c--;
    }
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    let newH = slow.next;
    slow.next = null;
    fast.next = head;
    return newH;
};