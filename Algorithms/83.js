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
// Runtime: 68 ms, faster than 80.78% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 36.1 MB, less than 25.57% of JavaScript online submissions for Remove Duplicates from Sorted List.
var deleteDuplicates = function(head) {
    let rtn = pre = new ListNode(null);
    while(head != null){
        if(head.val != pre.val){
            pre.next = new ListNode(head.val);
            pre = pre.next;
        }
        head = head.next;
    }
    return rtn.next;
};