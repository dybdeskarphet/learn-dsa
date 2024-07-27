function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  console.log(
    `Merging: left = ${JSON.stringify(left)}, right = ${JSON.stringify(right)}`
  );

  while (leftIndex < left.length && rightIndex < right.length) {
    console.log(
      `Comparing: left[${leftIndex}] = ${left[leftIndex]}, right[${rightIndex}] = ${right[rightIndex]}`
    );
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const mergedResult = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  console.log(`Result after merge: ${JSON.stringify(mergedResult)}`);
  return mergedResult;
}

function mergeSort(array) {
  console.log(`Splitting: ${JSON.stringify(array)}`);

  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(
  `Sorted array: ${JSON.stringify(mergeSort([38, 27, 43, 82, 9, 3, 10]))}`
);
