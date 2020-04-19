# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 28ms 13.9MB

class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return root
        queue = []
        finalArr = []
        queue.append(root)
        flag = True
        while len(queue) > 0:
            tempArr = []
            newQueue = []
            l = len(queue)
            for i in range(l):
                offset = 0
                if flag:
                    temp = queue.pop(0)
                    if temp.left:
                        newQueue.append(temp.left)
                    if temp.right:
                        newQueue.append(temp.right)
                else:
                    temp = queue.pop(-1)
                    if temp.left:
                        newQueue.insert(0,temp.left)
                        offset = 1
                    if temp.right:
                        newQueue.insert(0+offset,temp.right)
                tempArr.append(temp.val)
            queue = newQueue
            flag = not flag
            finalArr.append(tempArr)
        return finalArr
        