class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  } // * I'm not sure why but we can consider this as O(1)

  set(key, value) {
    let address = this._hash(key);
    !this.data[address] && (this.data[address] = []);
    this.data[address].push([key, value]);
  } // * No looping, just pushing the data, so it's O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }
} // * If there are no collisions, it's O(1). But if there are collisions, it can be O(n)

const myHashTable = new HashTable(50);

myHashTable.set("şevval", 20);
myHashTable.set("şevvall", 200);
myHashTable.set("arda", 22);
myHashTable.set("ahmet", 22);
myHashTable.set("anıl", 12);
myHashTable.set("akif", 18);
console.log(myHashTable.keys());
// myHashTable.set("arda", 22);
// console.log(myHashTable.get("şevval"));
