const factorial = (n) => {
  if (n == 0) {
    return BigInt(1);
  } else {
    return BigInt(n) * factorial(n - 1);
  }
};

const timeFactorial = (n) => {
  const start = performance.now();
  const result = factorial(n);
  const end = performance.now();
  console.log(`Factorial(${n}) = ...`);
  console.log(`Time taken: ${end - start} ms`);
};

const cache = {};

const memoizedFactorial = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    if (n == 0) {
      return BigInt(1);
    } else {
      cache[n] = BigInt(n) * memoizedFactorial(n - 1);
      return cache[n];
    }
  }
};

const timeMemoizedFactorial = (n) => {
  const start = performance.now();
  const result = memoizedFactorial(n);
  const end = performance.now();
  console.log(`Memoized Factorial(${n}) = ...`);
  console.log(`Time taken: ${end - start} ms`);
};

timeFactorial(5000);
timeMemoizedFactorial(5000);
console.log("Factorial is cached, it should take less time now");
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);

cache = {};
console.log("Cache is cleaned, inital call should be longer");

timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
timeMemoizedFactorial(5000);
