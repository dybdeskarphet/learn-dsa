let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min_ix = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min_ix]) {
        min_ix = j;
      }
    }

    [array[min_ix], array[i]] = [array[i], array[min_ix]];
  }
};

selectionSort(numbers);
console.log(numbers);
