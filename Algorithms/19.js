/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// trick
// 链表倒数第n个
// 试图通过快慢指针实现，快慢相距n，快到尾，慢到倒数n  √
var removeNthFromEnd = function(head, n) {
    let rtn=new ListNode(0);
    let slow=rtn,fast=rtn;
    slow.next=head;
    for(let i=0;i<=n;i++){
        fast=fast.next;
    }
    console.log(fast);
    while(fast!==null){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
    return rtn.next;
};


// var removeNthFromEnd = function(head, n) {//忘了还有参数n，把题看错成2
//     //先逆转，从头遍历删除对应，再逆转
//     //性能较低
//     let pre=new ListNode(null),ppre=new ListNode(null);
//     let rtn=new ListNode(null),p=new ListNode(null);
//     rtn=p;
//     while(head.next!==null){
//         current=new ListNode(head.val);
//         ppre=pre;
//         pre=current;
//         head=head.next;
//         if(ppre.val!==null){
//             p.next=ppre;
//             p=p.next;
//         }
//     }
//     ppre.next=head;
//     return rtn.next;
// };