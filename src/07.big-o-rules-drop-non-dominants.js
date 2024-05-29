const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

const printAllNumbersThenAllPairSums = (numbers) => {
  console.log("Here are the numbers:");
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log("\nAnd here are their sums:");
  numbers.forEach((number1) => {
    numbers.forEach((number2) => {
      console.log(`${number1} + ${number2} = ${number1 + number2}`);
    });
  });
};

printAllNumbersThenAllPairSums(numbers);

// O(n + n^2) --> Drop the non-dominants --> O(n^2)
