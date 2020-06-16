# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 44ms 14.1M
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        queue = []
        finalArr = []
        queue.append(root)
        while len(queue) > 0:
            tempArr = []
            l = len(queue)
            for i in range(l):
                temp = queue.pop(0)
                if temp.left:
                    queue.append(temp.left)
                if temp.right:
                    queue.append(temp.right)
                tempArr.append(temp.val)
            finalArr.insert(0,tempArr)
        return finalArr