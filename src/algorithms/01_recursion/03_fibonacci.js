// I like this method more
const fibonacciIterative = (number) => {
  // O(n)
  let arr = [0, 1];

  for (let i = 2; i <= number; i++) {
    /*
    console.log(
      `i: ${i}\narr[${i - 2}] + arr[${i - 1}] = ${
        arr[i - 2] + arr[i - 1]
      } \narr = [${arr}]\n---`
    );
    */
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[number];
};

const fibonacciRecursive = (number) => {
  // O(2^n)
  if (number < 2) {
    return number;
  }
  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

// console.log(fibonacciRecursive(40));
console.log(fibonacciIterative(100));
