class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);
    // Write your code here.
    let current = this;
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let current = this;
		while(current) {
			if(value === current.value) return true;
			if(value < current.value) {
				current = current.left
			} else {
				current = current.right
			}
		}
		return false;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

const bst = new BST(10);

bst.left = new BST(8);
bst.right = new BST(14);

console.log(bst.insert(15).right.right);
console.log(bst.contains(7))
