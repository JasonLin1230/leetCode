# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 60ms 18.3M
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        ino_dict = {}
        for i,num in enumerate(inorder):
            ino_dict[num] = i
        def recur(start,end):
            if start>end:
                return None
            rootVal = postorder.pop()
            splitIndex = ino_dict[rootVal]
            root = TreeNode(rootVal)
            root.right = recur(splitIndex+1, end)
            root.left = recur(start, splitIndex-1)
            return root
        return recur(0,len(inorder)-1)