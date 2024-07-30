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

  printTree(node = this.root, indent = "", last = true, isRoot = true) {
    if (node != null) {
      if (isRoot) {
        console.log(node.value);
      } else {
        console.log(indent + (last ? "└── " : "├── ") + node.value);
        indent += last ? "    " : "│   ";
      }

      this.printTree(node.left, indent, false, false);
      this.printTree(node.right, indent, true, false);
    }
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

  breadthFirstSearch(value) {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(
        `Current value: ${currentNode.value}\nQueue: ${JSON.stringify(
          queue
        )}\nList ${list}`
      );
      if (currentNode.value === value) return true;

      list.push(currentNode.value);

      currentNode.right && queue.push(currentNode.right);
      currentNode.left && queue.push(currentNode.left);
    }

    return list;
  }

  breadthFirstSearchRecursive(queue, list, value) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    if (currentNode.value === value) return true;
    list.push(currentNode.value);
    currentNode.right && queue.push(currentNode.right);
    currentNode.left && queue.push(currentNode.left);

    return this.breadthFirstSearchRecursive(queue, list, value);
  }

  traverseInOrder(node, list) {
    node.left && this.traverseInOrder(node.left, list);
    list.push(node.value);
    node.right && this.traverseInOrder(node.right, list);
    return list;
  }

  traversePreOrder(node, list) {
    list.push(node.value);
    node.left && this.traversePreOrder(node.left, list);
    node.right && this.traversePreOrder(node.right, list);
    return list;
  }

  traversePostOrder(node, list) {
    node.left && this.traversePostOrder(node.left, list);
    node.right && this.traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
  }

  DFSInorder() {
    return this.traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return this.traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return this.traversePreOrder(this.root, []);
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
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(99);
tree.insert(15);
tree.insert(1);
// console.log(tree.breadthFirstSearch(15));
tree.breadthFirstSearchRecursive([tree.root], [], 9);
console.log(tree.printTree());
console.log(`DFS Inorder: ${JSON.stringify(tree.DFSInorder())}`);
console.log(`DFS Preorder: ${JSON.stringify(tree.DFSPreorder())}`);
console.log(`DFS Postorder: ${JSON.stringify(tree.DFSPostorder())}`);
