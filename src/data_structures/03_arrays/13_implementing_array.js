class NotSpecialArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    this.shiftItems(index);
    const lastItem = this.data[this.length - 1];
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new NotSpecialArray();

const baliminSevdigiYemekler = new NotSpecialArray();

baliminSevdigiYemekler.push("makarna");
baliminSevdigiYemekler.push("yeşil elma");
baliminSevdigiYemekler.push("mango");

console.log(baliminSevdigiYemekler);

// newArray.push("Hello");
// newArray.push(", ");
// newArray.push("you");
// newArray.push("...");
// console.log(newArray);
//
// newArray.delete(2);
//
// console.log(newArray);
