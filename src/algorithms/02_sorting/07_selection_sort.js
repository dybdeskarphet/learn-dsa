let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  length = array.length;
  for (i = 0; i < length; i++) {
    let min_ix = i;
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[min_ix]) {
        min_ix = j;
      }
    }

    [array[min_ix], array[i]] = [array[i], array[min_ix]];
  }
};

selectionSort(numbers);
console.log(numbers);
