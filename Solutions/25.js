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
 // 考虑第一种解法：将链表每k个分段(最后一段小于等于三)，递归逆转，链接
 // reverseKGroup(){
 //    //当链表长度小于等于三时，return reverse(list);
 //    //reverse()将接受的链表逆转
 //    //combine()将两个链表链接
 //    combine(reverse(list_0_2),reverseKGroup(remain));
 // }

 // 考虑第二种解法：将链表遍历生成字符数组，利用数组的reverse逆转，concat合并，最后生成链表
 // 下面是第二种解法的实现

// Runtime: 80 ms, faster than 89.77% of JavaScript online submissions for Reverse Nodes in k-Group.
// Memory Usage: 37.5 MB, less than 78.57% of JavaScript online submissions for Reverse Nodes in k-Group.
var reverseKGroup = function(head, k) {
    let arr=[];
    while(head!==null){
        arr.push(head.val);
        head=head.next;
    }
    let resArr = reverseKArr(arr,k);
    let rtn = new ListNode(0);
    let pre = rtn;
    let len = resArr.length;
    while(len > 0){
        let tempNode = new ListNode(resArr.shift());
        pre.next = tempNode;
        pre = tempNode;
        len--;
    }
    return rtn.next;
};
var reverseKArr = function(array,k){
    if(array.length < k){
        return array;
    }
    if(array.length ==- k){
        return array.reverse();
    }
    let temp = array.slice(0,k);
    let remain = array.slice(k);
    return temp.reverse().concat(reverseKArr(remain,k));
}