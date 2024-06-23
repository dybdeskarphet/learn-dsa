class WeirdQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);

    return this;
  }

  dequeue() {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();

    return this;
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }
}

const newQueue = new WeirdQueue();

newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.dequeue();
newQueue.enqueue(40);
newQueue.enqueue(50);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();

console.log(newQueue.peek());
console.log(newQueue);
