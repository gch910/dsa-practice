from bst import Node
from collections import deque


class Tree:
    def __init__(self):
        self.root = None

    def bft(self):
        queue = deque([self.root])
        visited = set()

        current = self.root

        while len(queue):
            current = queue.popleft()
            # if current.val == val:
            #     return True
            visited.add(current.val)
            if(current.left):
                queue.append(current.left)
            if(current.right):
                queue.append(current.right)
        
        return visited
    
    
tree = Tree()

tree.root = Node(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.right.left = Node(17)

print(tree.bft())