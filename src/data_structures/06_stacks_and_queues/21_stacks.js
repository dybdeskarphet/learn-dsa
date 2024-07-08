class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.bottom = this.top;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.top;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  peek() {
    return this.length !== 0 ? this.top.value : this.top;
  }

  pop() {
    if (this.length !== 0) {
      const returnValue = this.top;
      this.top = this.top.next;
      if (this.top === null) {
        this.bottom = null;
      }
      this.length--;
      return returnValue.value;
    } else {
      return this.top;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }
}

const newStack = new Stack(10);
newStack.push(20);
newStack.push(30);
console.log(newStack);
console.log(`Peak value of newStack is: ${newStack.peek()}`);
