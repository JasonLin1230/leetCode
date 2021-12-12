// 876. Middle of the Linked List
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode left = head, right = head;
        while (right != null){
            if (right.next == null) return left;
            if (right.next.next == null) return left.next;
            left = left.next;
            right = right.next.next;
        }
        return left;
    }
}