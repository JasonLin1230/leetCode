# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 不要随便加括号

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        return self.isSymmetricRecur(root.left, root.right)
    def isSymmetricRecur(self, left: TreeNode, right: TreeNode) -> bool:
        if not left and not right:
            return True
        if not left or not right:
            return False
        if left.val!=right.val:
            return False
        return self.isSymmetricRecur(left.left, right.right) and self.isSymmetricRecur(left.right, right.left)