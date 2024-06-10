const boo = (x) => {
  for (let i = 0; i < x.length; i++) console.log("boo!");
};

boo([1, 2, 3, 4, 5]);

/* The only memory we use is with "i" variable,
that means the space complexity of this function is
O(1) because it's constant. */

const createHiArray = (x) => {
  let hiArray = [];
  for (let i = 0; i < x; i++) {
    hiArray[i] = "hi";
  }

  return hiArray;
};

console.log(createHiArray(10));
/* Space complexity of this function is O(n)
because we add a new element to array according
to the number we give to the function */
