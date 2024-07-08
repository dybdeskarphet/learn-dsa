/*
(function printThisObject() {
  console.log(this); // return the global object
})();
*/

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// console.log(object2);

const object4 = {
  a: function () {
    console.log(this);
  },
};

// object4.a();

class Player {
  constructor(name, type) {
    console.log("player: ", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}, and I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard: ", this);
  }
  play() {
    console.log(`ABRACADABRA! I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Harry", "Healer");
const wizard2 = new Wizard("Snape", "Dark Magic");
console.log(wizard1);
console.log(wizard2);

wizard1.play();
wizard1.introduce();
