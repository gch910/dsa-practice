from bst import Node

class Tree:
    def __init__(self):
        self.root = None

    def bft(self, val, current):
        if not current:
            return False
        if current.val == val:
            return True
        bft(self, val, current.left)
        bft(self, val, current.right)
    
        