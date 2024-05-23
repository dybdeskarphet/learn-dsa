const boxes = Array.from({ length: 5 }, (_, i) => i + 1);

const logAllPairsOfArray = () => {
  let count = 0;
  boxes.forEach((e1) => {
    boxes.forEach((e2) => {
      console.log(`${e1}, ${e2}`);
      count++;
    });
  });
  console.log(count);
};

logAllPairsOfArray();

/* When you see nested loops, you multiply the n.
In this case, the Big O notation is --> O(n^2) */
