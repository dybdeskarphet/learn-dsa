const array1 = ["a", "b", "c", "x"];
const array2 = ["e", "f", "g"];
let map = {};
let hasCommon = false;

array1.map((cur) => {
  map[cur] = true;
});

for (let i = 0; i < array2.length; i++) {
  if (map[array2[i]]) {
    hasCommon = true;
  } else {
    hasCommon = false;
  }
}

console.log(`Long version: ${hasCommon}`);

// This approach has a better time complexity, it's O(a+b)
// And the space complexity of it is O(1) because no new variables are created

// Here is the shortened versio of the above code

const containsCommonItems = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

console.log(`Short version: ${containsCommonItems(array1, array2)}`);
