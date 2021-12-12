// 19. Remove Nth Node From End of List
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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0,head);
        ListNode left = dummy, right = dummy;
        int count = 0;
        while (right.next != null) {
            if (count > n-1) {
                left = left.next;
            }
            right = right.next;
            count++;
        }
        left.next = left.next.next;
        return dummy.next;
    }
}