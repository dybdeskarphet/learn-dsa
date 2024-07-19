const insertionSort = (arr) => {
  // console.log("Initial array:\n", arr.join(", "));
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      // console.log(`Mid iteration ${i}:\n`, arr.join(", "));
    }
    arr[j + 1] = key;
    // console.log(`After iteration ${i}:\n`, arr.join(", "));
  }
  return arr;
};

let array = [34, 7, 23, 32, 5, 62, 1, 99];
let sortedArray = insertionSort(array);
console.log(sortedArray);
