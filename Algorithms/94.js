// Runtime: 33.8 ms, faster than 92.36 % of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 48 ms, less than 94.66% of JavaScript online submissions for Reverse Linked List II.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let rtn = [], stack = [];
    while(1){
        while(root){
            stack.push(root);
            root = root.left;
        }
        if(stack.length == 0){
            return rtn;
        }
        root = stack.pop();
        rtn.push(root.val);
        root = root.right;
    }
};