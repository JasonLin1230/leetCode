# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 解法一：44 ms	13.9 MB

import queue
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        else:
            flag = TreeNode("")
            q = queue.Queue()
            finalArr = []
            tempArr = []
            q.put(root)
            q.put(flag)
            while not q.empty():
                temp = q.get()
                if temp.val == "":
                    finalArr.append(tempArr)
                    tempArr = []
                    if q.empty():
                        break
                    q.put(flag)
                else:
                    tempArr.append(temp.val)
                if temp.left:
                    q.put(temp.left)
                if temp.right:
                    q.put(temp.right)
            return finalArr

# 解法二：

import queue
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        else:
            q = queue.Queue()
            finalArr = []
            q.put(root)
            while not q.empty():
                tempArr = []
                size = q.qsize()
                for i in range(size):
                    temp = q.get()
                    if temp.left:
                        q.put(temp.left)
                    if temp.right:
                        q.put(temp.right)
                    tempArr.append(temp.val)
                finalArr.append(tempArr)
            return finalArr

# 解法三：28ms

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
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
            finalArr.append(tempArr)
        return finalArr