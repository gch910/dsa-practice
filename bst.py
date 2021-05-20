class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = Node(val)
            return
        currentNode = self.root
        while currentNode:
            if val < currentNode.val:
                if currentNode.left:
                    currentNode = currentNode.left
                else:
                    currentNode.left = Node(val)
                    return
            else:
                if currentNode.right:
                    currentNode = currentNode.right
                else:
                    currentNode.right = Node(val)
                    return
    def find(self, val):
        if not self.root:
            return False
        currentNode = self.root
        while currentNode:
            if currentNode.val == val:
                return True
            if val < currentNode.val:
                currentNode = currentNode.left
            else:
                currentNode = currentNode.right
        return False
                

tree = BST()

tree.insert(12)
tree.insert(23)
tree.insert(9)
tree.insert(15)
tree.insert(50)
tree.insert(10)
# print(tree.find(72))

        