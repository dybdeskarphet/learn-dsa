class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // if there's no node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // if there are any nodes
    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        console.log("Already exists!");
        return this;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    let level = 1;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        level++;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        level++;
      } else if (value == currentNode.value) {
        return { level: level, value: currentNode.value };
      }
    }

    return null;
  }
}

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(12);
tree.insert(7);
tree.insert(8);
tree.insert(6);
console.log(tree.lookup(8));
console.log(JSON.stringify(traverse(tree.root)));
