# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 32 ms	15.3 MB

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root:
            left = self.maxDepth(root.left)
            right = self.maxDepth(root.right)
            return left+1 if left>right else right+1
        return 0
        