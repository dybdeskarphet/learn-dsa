const array1 = ["a", "b", "c", "x"];
const array2 = ["e", "f", "x"];
let haveCommon = false;

array1.forEach((e1) => {
  array2.forEach((e2) => {
    if (e1 == e2) {
      haveCommon = true;
    }
  });
});

console.log(`array1 and array2 have common elements: ${haveCommon}`);

// Time complexity of this approach is O(a*b), look at the next approach for a better solution
