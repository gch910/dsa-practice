class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder(current = this.root, visited = []) {
    console.log(current.left);
    if (!current) return;
    visited.push(current.val);
    if (current.left) {
      this.preOrder(current.left, visited);
    }
    if (current.right) {
      this.preOrder(current.right, visited);
    }
    return visited;
  }

  preOrderIter() {
    const stack = [this.root];
    const visited = [];

    while (stack.length) {
      let current = stack.pop();
      visited.push(current.val);
      if (current.right) stack.push(current.right);

      if (current.left) stack.push(current.left);
  
    }

    return visited;
  }

  postOrder(current = this.root, visited = []) {
    if (!current) return;
    if (current.left) this.postOrder(current.left, visited);
    if (current.right) this.postOrder(current.right, visited);
    
    visited.push(current.val);
    return visited;
  }

  inOrder(current = this.root, visited = []) {
    if(!current) return;
    if(current.left) this.inOrder(current.left, visited)
    visited.push(current.val)
    if(current.right) this.inOrder(current.right, visited)

    return visited
  }

  // postOrderIter() {
  //   const stack = [this.root]
  //   const visited = []

  //   let current = stack[0]
  //   while(stack.length) {

  //     if(current.right) stack.push(current.right)
  //     if(current.left) stack.push(current.left)
  //     current = stack.pop()
  //     visited.push(current.val)
 
  //   }

  //   return visited
  // }
}

const tree = new Tree();

tree.root = new Node(1);

tree.root.left = new Node(2);

tree.root.right = new Node(7);

tree.root.left.left = new Node(3);

tree.root.left.right = new Node(4);

tree.root.right.left = new Node(5);

tree.root.right.right = new Node(6);

tree.root.right.right.right = new Node(10);

tree.root.left.left.left = new Node(24);

// tree.root = new Node(10)
// tree.root.left = new Node(6)
// tree.root.left.left = new Node(3)
// tree.root.left.right = new Node(8)
// tree.root.right = new Node(15)
// tree.root.right.right = new Node(20)

// console.log(tree.preOrder());
console.log(tree.preOrderIter());

console.log(tree.postOrder());

console.log(tree.inOrder());
