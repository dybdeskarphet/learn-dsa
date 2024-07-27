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
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.breadthFirstSearch(15));
console.log(tree.breadthFirstSearchRecursive([tree.root], [], 9));
