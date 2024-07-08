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
}; // It's scalable but longer

const findFirstRecurring2 = (array) => {
  let countMap = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (countMap[element] !== undefined) {
      return element;
    } else {
      countMap[element] = i;
    }

    console.log(countMap);
  }
}; // It's much more straightforward but not as scalable

console.log(findFirstRecurring(array1));
console.log(findFirstRecurring(array2));
console.log(findFirstRecurring2(array2));
