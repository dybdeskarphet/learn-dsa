unsorted1 = [0, 3, 4, 31];
unsorted2 = [4, 6, 30];

const mergeAndSort = (array1, array2) => {
  let modifiedArray = [];
  let [array1Item, array2Item] = [array1[0], array2[0]]
  let [i,j] = [1,1];

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      modifiedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      modifiedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return modifiedArray;
};

console.log(mergeAndSort(unsorted1, unsorted2));
