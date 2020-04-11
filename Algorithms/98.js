/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [], pre = null;
    while(1){
        while(root){
            stack.push(root);
            root = root.left;
        }
        if(stack.length == 0){
            return true;
        }
        let temp = stack.pop();
        if(pre && pre.val >= temp.val){
            return false;
        }
        pre = temp;
        root = temp.right;
    }
};