/*
let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 20,
        next: null
    },
  },
}
*/

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
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

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    } else if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    let currentNodeIndex = 0;
    let currentNode = this.head;

    while (currentNodeIndex < index - 1) {
      currentNode = currentNode.next;
      currentNodeIndex++;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return this.printList();
    }

    let previousNodeIndex = 0;
    let previousNode = this.head;

    while (previousNodeIndex < index - 1) {
      previousNode = previousNode.next;
      previousNodeIndex++;
    }

    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;

    if (index === this.length - 1) {
      this.tail = previousNode;
    }

    this.length--;
    return this.printList();
  }

  reverse() {
    // Watch this video for a visualization: https://www.youtube.com/watch?v=TSDl7sRxWdU
    if (!this.head || !this.head.next) {
      return this;
    }

    let prev = null;
    let current = this.head;
    let next = null;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(4);
console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.remove(1));
// console.log(myLinkedList);
console.log(myLinkedList.reverse());
