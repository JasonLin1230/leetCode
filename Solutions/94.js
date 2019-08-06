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
// Your runtime beats 93.08 % of javascript submissions.
// Your memory usage beats 45.95 % of javascript submissions.
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