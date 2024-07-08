let user = {
  age: 30,
  name: "Arda",
  wizard: true,
  castSpell: function () {
    console.log("Avada kedavra!");
  },
};

user.age; // O(1)
user.castSpell(); // O(1)
user.magic = false; // O(1)

// * But because of the hash collisions, time complexity of a lookup can be O(n)
