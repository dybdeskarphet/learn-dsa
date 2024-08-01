let calculations = 0;

const fibonacci = (n) => {
  calculations++;
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciMaster = () => {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (cache[n] !== undefined) return cache[n];
    return (cache[n] = n < 2 ? n : fib(n - 1) + fib(n - 2));
  };
};

const noramlFibResult = fibonacci(30);
console.log(
  `Without dynamic programming: ${noramlFibResult}, ${calculations} calculations`
);

calculations = 0;

const fasterFib = fibonacciMaster();
const fasterFibResult = fasterFib(30);
console.log(
  `With dynamic programming: ${fasterFibResult}, ${calculations} calculations`
);
