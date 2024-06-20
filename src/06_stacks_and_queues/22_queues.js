class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = this.first;
    this.length = 1;
  }

  peek() {
    return this.length !== 0 ? this.first.value : this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length !== 0) {
      const returnValue = this.first;
      this.first = this.first.next;
      if (this.first === null) {
        this.last = null;
      }
      this.length--;
      return returnValue.value;
    } else {
      return this.first;
    }
  }
}

const newQueue = new Queue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.dequeue();
newQueue.dequeue();

console.log(newQueue);
console.log(`Peak value of newQueue is: ${newQueue.peek()}`);
