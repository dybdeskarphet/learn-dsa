const factorialRecurisve = (number) => {
  if (number === 2) {
    return 2;
  }

  return number * factorialRecurisve(number - 1);
};

const factorialIterative = (number) => {
  let answer = 1;

  if (number === 2) {
    return 2;
  }

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
};

console.log(factorialRecurisve(20));
console.log(factorialRecurisve(20));
