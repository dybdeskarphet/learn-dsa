class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;

    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this;
    } else if (index >= this.length) {
      this.append(value);
      return this;
    }

    let currentNodeIndex = 0;
    let currentNode = this.head;

    while (currentNodeIndex < index - 1) {
      currentNode = currentNode.next;
      currentNodeIndex++;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;
    newNode.prev = currentNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return this;
    }

    let previousNodeIndex = 0;
    let previousNode = this.head;

    while (previousNodeIndex < index - 1) {
      previousNode = previousNode.next;
      previousNodeIndex++;
    }

    if (index === this.length - 1) {
      previousNode.next = null;
      this.tail = previousNode;
      return this;
    }

    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    nodeToRemove.next.prev = previousNode;

    this.length--;
    return this;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.prepend(1);
myDoublyLinkedList.append(4);
myDoublyLinkedList.prepend(20);
console.log(myDoublyLinkedList.remove(2));
// console.log(myDoublyLinkedList.insert(1, 99));
// console.log(myDoublyLinkedList.remove(1));
// console.log(myLinkedList);
