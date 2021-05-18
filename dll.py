class Node:
    def __init__(self, val):
        self._val = val
        self._prev = None
        self._next = None

    @property
    def val(self):
        return self._val
    
    @val.setter
    def val(self, value):
        self._val = value
    
    @property
    def prev(self):
        return self._prev
    
    @prev.setter
    def prev(self, value):
        self._prev = value
    
    @property
    def next(self):
        return self._next
    
    @next.setter
    def next(self, value):
        self._next = value


class Dll:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def push(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
            self.length += 1
            return newNode.val
        oldTail = self.tail
        oldTail.next = newNode
        newNode.prev = oldTail
        self.tail = newNode
        self.length += 1
        return newNode.val
    
    def pop(self):
        oldTail = self.tail
        if self.head == self.tail:
            self.head = None
            self.tail = None
            self.length -= 1
            return oldTail.val
        newTail = oldTail.prev
        newTail.next = None
        self.tail = newTail
        self.length -= 1
        return oldTail.val
    
    def insert_start(self, val):
        newHead = Node(val)
        if not self.head:
            self.head = newHead
            self.tail = newHead
            self.length += 1
            return newHead.val
        oldHead = self.head
        newHead.next = oldHead
        oldHead.prev = newHead
        self.head = newHead
        self.length += 1
        return newHead.val

         
        
    

doubly = Dll()

doubly.push(10)
doubly.push(11)
doubly.push(12)
doubly.insert_start(9)
doubly.insert_start(8)
# doubly.push(13)
# doubly.push(15)
print(doubly.length)
print(doubly.tail.val) 
print(doubly.head.val) 
print(doubly.head.next.val) 
print(doubly.head.next.prev.val) 







    
