const array1 = [1, 2, 5, 7, 1, 2];
const array2 = [10, 16, 21, 10, 58, 39, 39];

const findFirstRecurring = (array) => {
  let countMap = {};

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (!countMap[element]) {
      countMap[element] = 0;
    }

    countMap[element]++;

    if (countMap[element] == 2) {
      return element;
    }
  }
};

console.log(findFirstRecurring(array1));
console.log(findFirstRecurring(array2));
