/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// Runtime: 60 ms, faster than 74.14% of JavaScript online submissions for Partition List.
// Memory Usage: 34.1 MB, less than 64.84% of JavaScript online submissions for Partition List.
var partition = function(head, x) {
    let rtn = pre = new ListNode(null);
    let ready = rtn;
    let flag = true;
    while(head != null){
        if(head.val >= x){
            pre.next = new ListNode(head.val);
            pre = pre.next;
            flag = false;
        }else{
            let temp = new ListNode(head.val);
            temp.next = ready.next;
            ready.next = temp;
            ready = ready.next;
            if(flag == true){
                pre = pre.next;
            }
        }
        head = head.next;
    }
    return rtn.next;
};