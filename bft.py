from bst import Node

class Tree:
    def __init__(self):
        self.root = None

    def bft(self, val, left=self.root.left, right=self.root.right):
        if not left or not right:
            return False 
        if current.val == val:
            return True

        self.bft(val, current.left, current.right)


        return "hello"

tree = Tree()

tree.root = Node(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.right.left = Node(4)
tree.root.right.right = Node(5)

print(tree.bft(2, tree.root))
    
        