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
// Runtime: 60 ms, faster than 92.19% of JavaScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 36 MB, less than 43.39% of JavaScript online submissions for Remove Duplicates from Sorted List II.
var deleteDuplicates = function(head) {
    let rtn = pre = new ListNode(0), count = 1, flag = true;
    if(head != null){
        while(head.next != null){
            if(head.next.val == head.val){
                while(head.next != null && head.next.val == head.val){
                    head = head.next;
                }
                //console.log(head.next.val, head.val, rtn);
                if(head.next != null){
                    head = head.next;
                }else{
                    flag = false;
                    break;
                }
            }else{
                pre.next = new ListNode(head.val);
                pre = pre.next;
                head = head.next;
            }
        }
        if(flag){
            pre.next = new ListNode(head.val);  
        }
    }
    return rtn.next;
};