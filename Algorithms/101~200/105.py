# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# 244 ms	52.3 MB
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if inorder:
            rootVal = preorder.pop(0)
            splitIndex = inorder.index(rootVal)
            root = TreeNode(rootVal)
            root.left = self.buildTree(preorder,inorder[0:splitIndex])
            root.right = self.buildTree(preorder,inorder[splitIndex+1:])
            return root
        
# 48 ms	18.6 MB
# use dictionary => O(1) instead of inorder.index() => O(n)
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        ino_dict = {}
        for i, num in enumerate(inorder):
            ino_dict[num] = i
        def recur(start, end):
            if start>end:
                return None
            rootVal = preorder.pop(0)
            splitIndex = ino_dict[rootVal]
            root = TreeNode(rootVal)
            root.left = recur(start, splitIndex-1)
            root.right = recur(splitIndex+1, end)
            return root
        return recur(0,len(inorder)-1)