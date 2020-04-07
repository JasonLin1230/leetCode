/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// Runtime: 52 ms, faster than 82.77% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 33.7 MB, less than 94.66% of JavaScript online submissions for Reverse Linked List II.
var reverseBetween = function(head, m, n) {
    let arr = [];
    while(head!=null){
        arr.push(head.val);
        head = head.next;
    }
    let newArr = arr.slice(0,m-1).concat(arr.slice(m-1,n).reverse().concat(arr.slice(n)));
    let rtn = pre = new ListNode(null);
    let len = newArr.length;
    for(let i=0;i<len;i++){
        pre.next = new ListNode(newArr[i]);
        pre = pre.next;
    }
    return rtn.next;
};

// Runtime: 48 ms, faster than 93.75% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 33.8 MB, less than 77.86% of JavaScript online submissions for Reverse Linked List II.
var reverseBetween = function(head, m, n) {
    let rtn = pre = new ListNode(null);
    rtn.next = head;
    for(let i=0;i<m-1;i++){
        pre = pre.next;
    }
    let start = pre.next;
    let then = start.next;
    for(let i=0;i<n-m;i++){
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }
    return rtn.next;
};